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

module.exports = router;
