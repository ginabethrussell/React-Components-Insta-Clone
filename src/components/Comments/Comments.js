import React, {useState} from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './Comments.css';

const Comments = props => {
  const [username, setUsername] = useState('');
  const [newComment, setNewComment] = useState('');

  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, updatePost, postId } = props;
 
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleNewComment = (e) => {
    setNewComment(e.target.value);
  }
  const addComment = ()=> {
    const lastCommentId = comments[comments.length - 1].id;
    const nextId = lastCommentId + 1;
    const newCommentObj = {
     "id": nextId,
     "username": username,
     "text": newComment
    }
    updatePost(postId, newCommentObj);
   setUsername('');
   setNewComment('');
  }

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => (
        <Comment key={comment.id } comment={comment}/>
      ))} 
      <CommentInput username={username} newComment={newComment} addComment={addComment}
      handleUsername={handleUsername} handleNewComment={handleNewComment} />
    </div>
  )
};

export default Comments;
