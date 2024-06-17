import {useState} from 'react';

import {buildFeedbackPath, extractFeedback} from '../api/feedback';

function FeedbackPage(props){
  const [feedbackData, setFeedbackData] = useState();

  async function loadFeedbackHandler(id){
    const response = await fetch(`/api/feedback/${id}`);
    const data = await response.json();
    setFeedbackData(data.feedback);
  }

  return (
    <>
      {feedbackData && <p>email: {feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map(item=> <li key={item.id}>{item.feedback}<button onClick={loadFeedbackHandler.bind(null, item.id)}>show details</button></li>)}
      </ul>
    </>
  )

}

export default FeedbackPage;

export async function getStaticProps(){
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props:{
      feedbackItems: data
    }
  }
}