export default function DynamicPage({params}){
  const dynamicId = params.slug;

  return <>this is a dynamic page with id: {dynamicId}</>
}