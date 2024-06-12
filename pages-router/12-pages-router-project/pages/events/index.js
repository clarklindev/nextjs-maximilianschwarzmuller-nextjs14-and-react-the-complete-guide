import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list';

function EventsPage(){

  const events = getAllEvents();

  return (
    <div>
      <h1>EventsPage</h1>
      <EventList items={events}/>
    </div>
  )
}

export default EventsPage;