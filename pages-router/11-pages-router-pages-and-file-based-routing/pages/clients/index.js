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

              {/* lesson 239 */}
              {/* <Link href={`/clients/${id}`}>{name}</Link> */}

              {/* lesson 240 */}
              <Link href={{
                pathname: '/clients/[id]',
                query: {
                  id    //id:id (client's id)
                }
              }}>
                {name}
              </Link>
            </li>
          })
        }
      </ul>
    </>
  );
}

export default ClientsPage;
