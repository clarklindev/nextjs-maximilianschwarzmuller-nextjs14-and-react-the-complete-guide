import {useRouter} from 'next/router';

function ClientProjectPage(){

  const router = useRouter();
  console.log(router.query);
    
  return (
    <h1>the projects of a given client</h1>
  )
}

export default ClientProjectPage;