import { useEffect, useState} from "react";

function LastSalesPage(){

  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    async function loadData(){
      const result = await fetch('https://jsonplaceholder.typicode.com/todos');
      //todo example:
      // {
      //   "userId": 1,
      //   "id": 4,
      //   "title": "et porro tempora",
      //   "completed": true
      // }

      setIsLoading(true);
      const data = await result.json();

      //change from object to array
      const transformedSales = [];
      for(const key in data){
        transformedSales.push({
          id: data[key].id,
          title: data[key].title
        })
      }

      setTodos(transformedSales);
      setIsLoading(false);
    }
    loadData();
    
    
    
  }, []);

  if(isLoading){
    return <p>loading...</p>
  }

  if(!todos){
    return <></>
  }

  return (<ul>
    {todos.map(todo=> <li key={todo.id}>{todo.title}</li>)}
  </ul>)
}

export default LastSalesPage;