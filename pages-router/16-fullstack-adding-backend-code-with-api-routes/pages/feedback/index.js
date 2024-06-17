import {buildFeedbackPath, extractFeedback} from '../api/feedback';

function FeedbackPage(props){
  return (
    <ul>
      {props.feedbackItems.map(item=> <li key={item.id}>{item.feedback}</li>)}
    </ul>
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