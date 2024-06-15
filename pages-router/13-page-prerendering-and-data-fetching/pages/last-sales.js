import { useEffect, useState} from "react";
import useSWR from 'swr';

function LastSalesPage(){
  const [todos, setTodos] = useState();

  //useSWR
  const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/todos?_limit=10`, (url) => fetch(url).then(res => res.json()));

  useEffect(()=>{
    console.log('data: ', data);
    if(data){
      
      const transformedTodos = [];

      for(const key in data){
        transformedTodos.push({
          id: data[key].id,
          title: data[key].title
        })
      }

      setTodos(transformedTodos);
    }
  }, [data]);
  
  if(error){
    return <p>failed to load</p>
  }

  if(!data || !todos){
    return <p>loading</p>
  }

  //STANDARD React fetching with useEffect
  // const [todos, setTodos] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   async function loadData(){
  //     const result = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     //todo example:
  //     // {
  //     //   "userId": 1,
  //     //   "id": 4,
  //     //   "title": "et porro tempora",
  //     //   "completed": true
  //     // }

  //     setIsLoading(true);
  //     const data = await result.json();

  //     //change from object to array
  //     const transformedTodos = [];
  //     for(const key in data){
  //       transformedTodos.push({
  //         id: data[key].id,
  //         title: data[key].title
  //       })
  //     }

  //     setTodos(transformedTodos);
  //     setIsLoading(false);
  //   }
  //   loadData();
    
    
    
  // }, []);

  // if(isLoading){
  //   return <p>loading...</p>
  // }

  // if(!todos){
  //   return <></>
  // }

  return (<ul>
  {
    todos.map(todo=> <li key={todo.id}>{todo.title}</li>)
  }
  </ul>);
}

export default LastSalesPage;