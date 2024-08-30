import { useState } from 'react';
import Input from './Todo/Input';
import List from './Todo/List';
function App() {
  let [todos,settodos]=useState(["breakfast","lunch","dinner","brunch"])
  // console.log(todos);
  let[edittodos,setedittodos]=useState({
    index:'',
    value:''
  })


  const addtodo=(value)=>{
    console.log(value);
    console.log("add todo fun fire ");

    // todos.push(value)
    // console.log(todos);
    settodos([...todos,value])
    // console.log(todos);
  }

  const deletetodo=(value)=>{
    // console.log(value);
    // console.log("delete todo fire ");
    // todos.splice(index,1);
    // console.log(todos);

    // settodos([...todos])

    let filterdata=todos.filter((todo)=>todo!==value);
    console.log(filterdata);
    settodos(filterdata)
 
  }

  const editTodo=(index,data)=>{
    console.log(index,data);
    
    setedittodos({
      index,
      data
    })

  }

  // const updatetodo=(index,data)=>{
  //   todos.splice(index,1,data)

  //   // console.log(index,data);
  //   settodos([...todos])


  //   setedittodos({
  //     index:'',
  //     data:''
  //   })




    

  // }

  const updatetodo=(index,data)=>{
    console.log(index,data);
    todos.splice(index,1,data)

    settodos([...todos])
    setedittodos({
      index:'',
      data:''
    })
    

  }

  




  return (
    <div className="App">
      <Input addtodo={addtodo} edittodos={edittodos} updatetodo={updatetodo} />
      <List todos={todos} deletetodo={deletetodo} editTodos={editTodo} />
    </div>
  );
}

export default App;
