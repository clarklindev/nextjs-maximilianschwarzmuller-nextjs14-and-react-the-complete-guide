import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

// import { getAllEvents } from '../../data/dummy-data';    //client-side loading dummy data
import { getAllEvents, getFeaturedEvents } from "../../helpers/api-util";
import EventList from "../../components/events-fetch/event-list";
import EventsSearch from "../../components/events-fetch/events-search";
import LayoutWithHeader from "@/components/layout/layout-with-header";

function FetchEventsPage(props) {
  const { events, featuredEvents } = props;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events-fetch/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>All my events</title>
      </Head>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <h2>Featured events</h2>
      <EventList items={featuredEvents} />
      <h2>All events</h2>
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: events,
      featuredEvents: featuredEvents,
    },
    revalidate: 60,
  };
}

FetchEventsPage.getLayout = (page) => (
  <LayoutWithHeader
    navigation={
      <ul>
        <li>
          <Link href="/events-fetch">Browser all events</Link>
        </li>
      </ul>
    }
  >
    {page}
  </LayoutWithHeader>
);

export default FetchEventsPage;
