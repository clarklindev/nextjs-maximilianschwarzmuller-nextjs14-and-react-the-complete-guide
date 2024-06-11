import Link from 'next/link';
import classes from './event-item.module.css';

function EventItem(props){

  const {title, image, date, location, id} = props;

  const humanReadableData = new Date(date).toLocaleDateString('en-GB', {
    // weekday: 'long', // 'short', 'narrow' can also be used
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedAddress = location.replace(',', '\n')
  const exploreLink = `/events/${id}`;
  return (
  <li className={classes.item}>
    <img src={`/${image}`} alt={title}/>
    <div className={classes.content}>
      <div className={classes.summary}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <time>{humanReadableData}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore event</Link>
      </div>
    </div>
  </li>
  )
}
export default EventItem;
