import fs from 'fs/promises';
import path from 'path';


function ProductDetailPage(props){
  const {loadedProduct} = props;

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <div>{loadedProduct.description}</div>
    </>
  )
}


export async function getStaticProps(context){
  const {params} = context;

  const productId = params.pid

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath); 
  const data = JSON.parse(jsonData);

  const product = data.products.find(product=> product.id === productId);
  
  return {
    props:{
      loadedProduct: product
    }
  }
}

export async function getStaticPaths(){
  return {
    paths:[
      { params: {pid: 'p1'}},
      { params: {pid: 'p2'}},
      { params: {pid: 'p3'}},
    ], 
    fallback: false
  }
}

export default ProductDetailPage;
