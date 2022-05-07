import React from "react";
import "./Posts.css";
const Posts = (img) => {
  return (
    <>
      <div className="posts">
        <div className="post">
          <img
            className="postImg"
            src="https://topbest.ph/wp-content/uploads/7-Cutest-Insects-in-the-World-1200x900.jpg"
            alt=""
          />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat"></span>
            </div>
            <span className="postTitle">
              <div to="/post/abc" className="link">
                <a href="https://blog.rstankov.com/bug-duty-process/">
                  Bug Duty Process
                </a>
              </div>
            </span>
            <span className="postDate">1 hour ago</span>
          </div>
        </div>
        <div className="post">
          <img
            className="postImg"
            src="https://www.theme-junkie.com/wp-content/uploads/Coding-Programming-Background-4.jpg"
            alt=""
          />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat"></span>
            </div>
            <span className="postTitle">
              <a href="https://blog.rstankov.com/design-code-for-removal/">
                Design Code Like It Will Be Removed Tomorrow
              </a>
            </span>
            <span className="postDate">1 hour ago</span>
          </div>
        </div>
      </div>
      <div className="posts2">
        <div className="post2">
          <img
            className="postImg"
            src="http://justfunfacts.com/wp-content/uploads/2021/11/bow-and-arrow-2.jpg"
            alt=""
          />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat"></span>
            </div>
            <span className="postTitle">
              <div className="link1">
                <a href="https://blog.rstankov.com/focus-task-first-year/">
                  Year One of Focused Task
                </a>
              </div>
            </span>
            <span className="postDate">1 hour ago</span>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="post">
          <img
            className="postImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OOXOA75iHoXu49alSOTVGKJ-Gc4yOlFpQA&usqp=CAU"
            alt=""
          />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat"></span>
            </div>
            <span className="postTitle">
              <div to="/post/abc" className="link">
                Facts About Cats{" "}
              </div>
            </span>
            <span className="postDate">1 hour ago</span>
          </div>
          <ul>
            Cats are believed to be the only mammals who don’t taste sweetness.
          </ul>
          <ul>
            Cats are nearsighted, but their peripheral vision and night vision
            are much better than that of humans.
          </ul>
          <ul>
            Cats are supposed to have 18 toes (five toes on each front paw; four
            toes on each back paw). * Cats canjump up to six times their length.
          </ul>
          <ul>
            Cats’ claws all curve downward, which means that they can’t climb
            down trees head-first. Instead, they have to back down the trunk.
          </ul>
        </div>
        <div className="post">
          <img
            className="postImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0Jhaja3wDknjvw2iRR85W_OhbxJNg1xw8w&usqp=CAU"
            alt=""
          />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat"></span>
            </div>
            <span className="postTitle">
              <div to="/post/abc" className="link">
                Facts About Dogs{" "}
              </div>
            </span>
            <span className="postDate">1 hour ago</span>
          </div>
          <ul>
            The Labrador Retriever has been on the AKC’s top 10 most popular
            breeds list for 30 consecutive years—longer than any other breed.
          </ul>
          <ul>
            A dog’s nose print is unique, much like a person’s fingerprint.
          </ul>
          <ul>
            Speaking of sleeping … all dogs dream, but puppies and senior dogs
            dream more frequently than adult dogs.
          </ul>
          <ul>
            A dog’s sense of smell is legendary, but did you know that his nose
            has as many as 300 million receptors? In comparison, a human nose
            has about 5 million.
          </ul>
        </div>
      </div>
    </>
  );
};
export default Posts;
