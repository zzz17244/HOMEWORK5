import { useState } from "react";
import "./App.css";
import axios from "axios";
const endpoint = "https://crudcrud.com/api/c3643d7dcafd447286097239f43f775f";
const resource = "/employee";

function App() {
  const [Name, setName] = useState("");
  const [employeeList, setEmployeeList] = useState([]);

  const postEmployee = () => {
    const body = {
      Name,
      age: Math.floor(Math.random() * Math.random() * 10 + 1),
    };

    axios.post(endpoint + resource, body).then(() => {
      axios.get(endpoint + resource).then((response) => {
        console.log(`response ===>`, response);
        setEmployeeList(response.data);
      });
    });

    console.log("line belowlog ");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter employee name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={postEmployee}>Add My Employee</button>
        <ul>
          {employeeList.map((employee) => (
            <li key={employee._id}>
              Name: {employee.Name} Age: {employee.age}
            </li>
          ))}
        </ul>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          maxime ex eius aperiam molestiae incidunt quos corrupti distinctio ut
          quibusdam, placeat voluptatibus rerum iure reiciendis quod dolor
          reprehenderit, quasi cupiditate.
        </div>
      </div>
    </>
  );
}

export default App;
