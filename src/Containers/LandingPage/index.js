import React, { Component } from "react";
import { Divider, Comment } from "semantic-ui-react";

import "./landingPageStyle.css";

import QuestionBar from "../../Components/QuestionBar";
import Card from "../../Components/Card";
import CommentBox from "../../Components/Comment/CommentBox";
import CommentList from "../../Components/Comment/CommentList";
import Navbar from "../../Components/Navbar";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: "p01",
          title: "Best framework or library to built frontend",
          author: "Nitesh shrestha",
          question:
            "I am new to Js and i know little about the framework and library to built front end application. I need help to find a good framework to learn for begineers",
          upVotes: 1000,
          comments: 50000,
          commentId: "c01"
        },
        {
          id: "p02",
          title: "My computer always crashes",
          author: "Sunjay Gurung",
          question:
            "Help me my computer  crashes so  much that my friend started calling me crashpian",
          upVotes: 0,
          comments: 1,
          commentId: "c02"
        }
      ],

      comments: [
        {
          commentId: "c01",
          value: [
            {
              id: 101,
              name: "aayush",
              date: "something",
              answer:
                "React is very popular framework that can built a fast front end for your application  "
            },
            {
              id: 102,
              name: "Sumit",
              date: "something",
              answer:
                "Vue is also a good framework because it is easy to learn  "
            },
            {
              id: 103,
              name: "Sunjay",
              date: "something",
              answer: "EveryBody knows react is the best"
            }
          ]
        },
        {
          commentId: "c02",
          value: [
            {
              id: 101,
              name: "aayush",
              date: "something",
              answer:
                "yes beacuse you are playing fortnite without any dedicated graphics"
            },
            {
              id: 102,
              name: "Sumit",
              date: "something",
              answer: "you need rtx 2080Ti "
            },
            {
              id: 103,
              name: "Nitesh",
              date: "something",
              answer: "you're a noob"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <QuestionBar></QuestionBar>
        {this.state.posts.map(post => (
          <div className="landing-page__post">
            <Card
              key={post.id}
              post={post}
              toggleComment={this.toggleCommentBox}
            />

            {post.comments <= 0 ? (
              <div>No comments to show</div>
            ) : (
              this.state.comments.map(comment =>
                comment.commentId === post.commentId ? (
                  <CommentList
                    key={comment.commentId}
                    comment={comment.value}
                  />
                ) : (
                  <></>
                )
              )
            )}
          </div>
        ))}
      </>
    );
  }
}

export default LandingPage;
