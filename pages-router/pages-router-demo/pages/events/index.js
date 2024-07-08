import { useRouter } from "next/router";
import Link from "next/link";

import { getAllEvents, getFeaturedEvents } from "../../data/dummy-data2";
import EventsSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import LayoutWithHeader from "@/components/layout/layout-with-header";

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

AllEventsPage.getLayout = (page) => (
  <LayoutWithHeader
    navigation={
      <ul>
        <li>
          <Link href="/events">Browser all events</Link>
        </li>
      </ul>
    }
  >
    {page}
  </LayoutWithHeader>
);

export default AllEventsPage;
