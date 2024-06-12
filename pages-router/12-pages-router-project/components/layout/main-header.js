import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader(){
  return <header className={classes.header}>
    {/* logo */}
    <div className={classes.logo}>
      <Link href="/">Next Events</Link>
    </div>
    {/* navbar */}
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href="/events">Browser all events</Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainHeader;