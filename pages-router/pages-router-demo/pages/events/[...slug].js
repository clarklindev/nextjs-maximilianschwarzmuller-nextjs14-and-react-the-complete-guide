import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data2";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailsFilterPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">invalid filter...</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">show all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">no events found...</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">show all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <h1>EventDetailsFilterPage</h1>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default EventDetailsFilterPage;
