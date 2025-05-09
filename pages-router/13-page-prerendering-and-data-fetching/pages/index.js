import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

function HomePage(props){
  const {products} = props;

  return (
    <ul>
      {
        products.map(product=>(
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))
      }
    </ul>
  )
}
export default HomePage;

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath); 
  const data = JSON.parse(jsonData);

  //redirect
  // if(!data){
  //   return {
  //     redirect:{
  //       destination: '/'
  //     }
  //   }
  // }

  //404
  // if(data.products.length === 0){
  //   return {notFound: true}
  // }

  return {
    props:{
      products:data.products
    },
    revalidate: 10  //seconds
  }

}
