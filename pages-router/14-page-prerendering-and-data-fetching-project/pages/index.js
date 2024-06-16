// import { getFeaturedEvents } from '../data/dummy-data';
import { getFeaturedEvents } from '../helpers/api-util';

import EventList from '../components/events/event-list';

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents(); //client-side fetch

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}


export default HomePage;

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents(); //server-side 
  return {
    props:{
      events:featuredEvents
    },
    revalidate: 1800,
  }  
}