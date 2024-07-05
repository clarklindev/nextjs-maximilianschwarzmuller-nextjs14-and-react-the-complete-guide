import { useRouter } from "next/router";
import { getAllEvents, getFeaturedEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import EventLayout from "@/components/layout/layout-event";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  const featuredEvents = getFeaturedEvents();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <>
      <h1>EventsPage</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <h2>Featured events</h2>
      <EventList items={featuredEvents} />
      <h2>All events</h2>
      <EventList items={events} />
    </>
  );
}

AllEventsPage.getLayout = (page) => <EventLayout>{page}</EventLayout>;

export default AllEventsPage;
