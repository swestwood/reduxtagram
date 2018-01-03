import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = React.createClass({
  render() {
    // postId is available via the params prop set by the Router
    const postId = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    console.log(post);
    return <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments}/>
    </div>;
  }
});

export default Single;
