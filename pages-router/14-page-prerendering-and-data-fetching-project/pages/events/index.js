import { Fragment } from 'react';
import { useRouter } from 'next/router';

// import { getAllEvents } from '../../data/dummy-data';    //client-side loading dummy data
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helpers/api-util';

function AllEventsPage(props) {
  
  const {events} = props;
  const router = useRouter();

  // const events = getAllEvents(); //client side load

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

export async function getStaticProps(){
  const response = await getAllEvents();
  return {
    props:{
      events: response
    }
  }
}