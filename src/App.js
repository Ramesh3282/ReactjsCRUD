import { useState } from 'react';
import './App.css';
import { data } from './Components/Data';
import Display from './Components/Display';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './Components/Addstudent';
import Editstudent from './Components/Editstudent';


function App() {
  const [students,setStudents]=useState(data)
  return (
    <div className="App">
      <h1>Welcome to Student CRUD Application</h1>
      <Routes>
        <Route exact path='/' element={<Display 
            students={students}
            setStudents={setStudents}/>}/>
        <Route path="/add" element={<Addstudent
        students={students}
        setStudents={setStudents}
        />}/>
        <Route path='/edit/:id' element={<Editstudent
        students={students}
        setStudents={setStudents}
        />}/>
      
      </Routes>
    
     
    </div>
  );
}

export default App;
