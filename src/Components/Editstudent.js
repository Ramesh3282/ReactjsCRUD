import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';



function Editstudent({students,setStudents}){

    const navigate=useNavigate()
    const {id}=useParams()
    const [sid,setSid]=useState()
    const [name,setName]=useState()
    const [batch,setBatch]=useState()
    const [gender,setGender]=useState()
    const [education,setEducation]=useState()

    useEffect(()=>{
        const editStudent=students.find((student)=>student.id===id)
        setSid(editStudent.id)
        setName(editStudent.name)
        setBatch(editStudent.batch)
        setGender(editStudent.gender)
        setEducation(editStudent.education)
    },[id,students])

    const updateStudent=()=>{
        
        const editStudentIndex=students.findIndex(student=>student.id===id)
        
        const updatedStudent={
            id,
            name,
            batch,
            gender,
            education
        }
        
       const updatedStudents=[...students]
       updatedStudents[editStudentIndex]=updatedStudent
        setStudents([...updatedStudents])
        navigate('/')
    }

    
    
  return (
    <div>
        <h1>Edit Student Form</h1>
        <Grid  container direction="column" justifyContent="center" alignItems="center" spacing={3} >
       
        <Grid item><TextField   size="small" variant="outlined" label="ID" value={id}  onChange={(e)=>setSid(e.target.value)}/> </Grid>
        <Grid item> <TextField size="small" variant="outlined" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/> </Grid>
        <Grid item><TextField size="small"  variant="outlined" label="Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/> </Grid>
        <Grid item> <TextField size="small" variant="outlined" label="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}/> </Grid>
        <Grid item> <TextField size="small" variant="outlined" label="Education" value={education} onChange={(e)=>setEducation(e.target.value)}/> </Grid>
        <Grid item> <Button variant="contained" onClick={updateStudent}>Update</Button> </Grid>

        </Grid>
       

    </div>
  )
}

export default Editstudent