import React from 'react';

const CommentInput = props => {
    const {addComment, handleUsername, handleNewComment} = props;
    return (
        <div>
            <form className="comment-form">
                <input
                type="text"
                name='username'
                placeholder="UserName"
                value={props.username}
                onChange={(e)=> handleUsername(e)}
                />
                <input
                type="text"
                name="text"
                placeholder="Add a comment"
                value={props.newComment}
                onChange={(e)=> handleNewComment(e)}
                />
                <button onClick={(e) => {
                    e.preventDefault();
                    addComment(e);
                }}>Add</button>
            </form>
        </div>
    )
}
export default CommentInput;