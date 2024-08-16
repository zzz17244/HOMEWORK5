import { useState } from 'react'
import './App.css'
import axios from 'axios'
const endpoint = 'https://crudcrud.com/api/c4e0efbbb4324a4894ea93a0d605246c';
const resource  = '/employee';


function App() {
  const [Name ,setName] = useState('')
  const [employeeList, setEmployeeList] = useState([])

  const postEmployee = () => {
    const body = {
      Name,
      age: Math.floor(Math.random() * Math.random() * 10)
    };

    axios.post(endpoint + resource, body).then(()=>{
      axios.get(endpoint+resource).then((response)=>{
          console.log(`response ===>`,response);
          setEmployeeList(response.data);
      })
    }

    )
    

      console.log("line belowlog ")

  }
  
  return (
    <>
       <div>
        <input type="text" placeholder='enter employee name' value={Name}  onChange={(e)=>setName(e.target.value) }/>
        <button onClick={postEmployee} >Add Employee</button>
        <ul>
            {
              employeeList.map((employee)=>{
                <li key={employee._id}>
                    {employee.Name}
                </li>
              }
              )
            }

        </ul>
      </div>
    </>
  )
}

export default App