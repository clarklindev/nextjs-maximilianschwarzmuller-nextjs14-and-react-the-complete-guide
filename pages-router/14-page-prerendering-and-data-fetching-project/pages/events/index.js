import { useRouter } from 'next/router';

// import { getAllEvents } from '../../data/dummy-data';    //client-side loading dummy data
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
  
  const {events} = props;
  const router = useRouter();

  // const events = getAllEvents(); //client side load

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;

export async function getStaticProps(){
  const events = await getAllEvents();
  return {
    props:{
      events
    },
    revalidate: 60
  }
}