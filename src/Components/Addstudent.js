import  React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

function Addstudent({students,setStudents}) {
    const navigate=useNavigate()
    
    const [id,setId]=useState()
    const [name,setName]=useState()
    const [batch,setBatch]=useState()
    const [gender,setGender]=useState()
    const [education,setEducation]=useState()

    const addStudent=()=>{
        const newStudent={
            id,
            name,
            batch,
            gender,
            education
        }
        console.log("newStudent",newStudent)
        setStudents([...students,newStudent])
        navigate('/')

    }

  return (
    <div>
        <h1>Add New Student Form</h1>
        <Grid  container direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item><TextField  size="small" variant="outlined" label="ID"   onChange={(e)=>setId(e.target.value)}/></Grid>
        <Grid item> <TextField size="small" variant="outlined" label="Name"  onChange={(e)=>setName(e.target.value)}/></Grid>
        <Grid item><TextField size="small"  variant="outlined" label="Batch"  onChange={(e)=>setBatch(e.target.value)}/></Grid>
        <Grid item> <TextField size="small" variant="outlined" label="Gender"  onChange={(e)=>setGender(e.target.value)}/></Grid>
        <Grid item><TextField size="small" variant="outlined" label="Education"  onChange={(e)=>setEducation(e.target.value)}/></Grid>
        <Grid item><Button variant="contained" onClick={addStudent}>Add</Button></Grid>
       
   </Grid>
    </div>
  )
}

export default Addstudent
