import {useRouter} from 'next/router';

function SelectedClientProjectPage(){
  const router = useRouter();
  console.log(router.query);
  
  return (
    <h1>project details page</h1>
  )
}

export default SelectedClientProjectPage;