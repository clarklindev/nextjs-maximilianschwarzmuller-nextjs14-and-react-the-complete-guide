import { useRouter } from 'next/router';

import { getAllEvents } from "../../dummy-data";
import EventsSearch from '../../components/events/events-search';
import EventList from '../../components/events/event-list';

function AllEventsPage(){
  const router = useRouter();
  const events = getAllEvents();
  
  function findEventsHandler(year, month){
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <>
      <h1>EventsPage</h1>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </>
  )
}

export default AllEventsPage;