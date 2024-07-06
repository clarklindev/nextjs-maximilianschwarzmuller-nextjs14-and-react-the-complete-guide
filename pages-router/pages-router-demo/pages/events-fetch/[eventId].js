// import { useRouter } from 'next/router';
// import { getEventById } from '../../data/dummy-data';
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getAllEvents, getFeaturedEvents } from "../../helpers/api-util";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  const event = props.event;

  if (!event) {
    return (
      <div className="center">
        <p>loading</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId; //because -> pages/events/[eventId].js
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
    revalidate: 30, //every 30min updated
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking"
  };
}

export default EventDetailPage;
