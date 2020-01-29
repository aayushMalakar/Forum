const router = require('express').Router();

// IMPORTING MODEL
const Question = require('../Model/Question');

// ADDING QUESTIONS
router.post('/addquestion', async (req, res) => {
  // DUPLICATION OF QUESTIONS
  const questionExist = await Question.findOne({ q_title: req.body.q_title });
  const questionExistError = {
    errorMsg: 'Question already Exist'
  };
  res.statusMessage = 'Question already exist';
  if (questionExist)
    res
      .status(400)
      .send(questionExistError)
      .end();

  //CREATE POST AND ASSIGN A TOKEN
  const question = new Question({
    q_title: req.body.q_title,
    tags: req.body.tags,
    questioner: req.body.questioner
  });
  try {
    await question.save();
    res.send({ question: question._id });
    console.log('question added sucessfully');
  } catch (err) {
    res.status(400).send(err);
  }
});

// GETTING QUESTIONS
router.get('/getquestion', async (req, res) => {
  if (req.query.q) {
    try {
      const exp = new RegExp(req.query.q, 'i');
      const results = await Question.find({
        q_title: exp
      });
      const errMsg = {
        message: 'Project not found'
      };
      if (results === undefined) {
        res.json(errMsg);
      } else {
        res.json(results);
      }
    } catch (err) {
      res.status(404).send(err);
      //   throw new Error('project not found');
    }
  } else {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (err) {
      res.json({ message: err });
    }
  }
});

//  GETTING ITEMS WITH SPECIFIC ID
router.get('/getquestion/:questionID', async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionID);
    res.json(question);
  } catch (err) {
    res.json({ message: err });
  }
});

//  UPDATING UPVOTES
router.post('/getquestion/:questionID', async (req, res) => {
  try {
    // PREVENTING DUPLICATE UPVOTE
    const requestedQuestion = await Question.find({
      _id: req.params.questionID
    });
    if (requestedQuestion[0].upVoteCounter.includes(req.body.upVoteCounter)) {
      const errMsg = {
        message: 'You have already upvoted'
      };
      res.json(errMsg);
    } else {
      const updateVote = await Question.findOneAndUpdate(
        { _id: req.params.questionID },
        { $push: { upVoteCounter: req.body.upVoteCounter } }
      );
      const msg = {
        message2: 'thank you for voting',
        result: updateVote
      };
      res.json(msg);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// ADDING COMMENTS
router.post('/addcomment/:questionID', async (req, res) => {
  try {
    // PREVENT DUPLICATE COMMENT
    // const requestComment = await Question.find({});
    const updateComment = await Question.findOneAndUpdate(
      { _id: req.params.questionID },
      {
        $push: {
          comment: {
            comment: req.body.comment,
            commentBy: req.body.commentBy,
            user_ID: req.body.user_ID,
            comment_time: req.body.comment_time
          }
        }
      }
    );
    const msg = {
      message2: 'successfully commented',
      result: updateComment
    };
    res.json(msg);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
