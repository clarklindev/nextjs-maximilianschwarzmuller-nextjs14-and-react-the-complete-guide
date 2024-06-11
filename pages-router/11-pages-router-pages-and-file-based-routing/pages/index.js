import Link from 'next/link';

function HomePage(){
  return (
    <div>
      <h1>
        HomePage
      </h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients" replace>Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;