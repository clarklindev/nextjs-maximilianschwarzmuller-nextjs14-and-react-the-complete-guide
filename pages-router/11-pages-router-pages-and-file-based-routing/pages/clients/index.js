import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximillian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <>
      <h1>ClientsPage</h1>
      <ul>

        {/* hardcoded */}
        {/* <li>
          <Link href="/clients/max">Max</Link>
        </li>
        <li>
          <Link href="/clients/manu">Manuel</Link>
        </li> */}

        {/* dynamic links */}
        {
          clients.map(({id, name}) => {
            return <li key={id}>
              <Link href={`/clients/${id}`}>{name}</Link>
            </li>
          })
        }
      </ul>
    </>
  );
}

export default ClientsPage;
