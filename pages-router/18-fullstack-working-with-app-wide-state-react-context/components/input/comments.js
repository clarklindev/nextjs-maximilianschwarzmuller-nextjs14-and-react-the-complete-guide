import { useEffect, useState, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;

  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState();

  useEffect(()=>{
    async function getData(){
      if(showComments){
        setIsFetchingComments(true);
        const response = await fetch(`/api/comments/${eventId}`);
        const data = await response.json();
        setComments(data.comments);
        setIsFetchingComments(false);
      }
    }
    getData();
    
  },[showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {

    try{
      notificationCtx.showNotification({title:"sending comment", message:"saving...", status:"pending"});
  
      //commentData -> {email, name, text}
      // send data to API
      const response = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers:{
          'Content-Type':'application/json'
        }
      });
  
      const data = await response.json();
      if(!response.ok){
        throw new Error(data.message || 'something went wrong');
      }
      notificationCtx.showNotification({title:"success", message:"saved", status:"success"});
    }
    catch(error){
      notificationCtx.showNotification({title:"Error", message:"error", status:"error"});
    }

  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments}/>}
      {showComments && isFetchingComments && <p>loading...</p>}
    </section>
  );
}

export default Comments;
