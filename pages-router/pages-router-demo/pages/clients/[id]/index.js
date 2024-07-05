import {useRouter} from 'next/router';

function ClientProjectPage(){

  const router = useRouter();
  console.log(router.query);
    
  function clickHandler(){
    // router.push('/clients/max/projecta');
    router.replace('/clients/max/projecta');
  }

  return (
    <>
      <h1>the projects of a given client</h1>
      <button onClick={clickHandler}>project a</button>
    </>
  )
}

export default ClientProjectPage;