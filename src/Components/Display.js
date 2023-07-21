import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useNavigate } from 'react-router-dom';







function Display({students,setStudents}){

   const navigate=useNavigate()

    const deleteStudent=(e,student)=>{
      
      const removeStudent=students.filter(stud=>(stud.id !==student.id))
      setStudents(removeStudent)
        
    }
  const columns=[
    {field:'id',headerName:"ID",width:170,sortable: false,filterable: false },
    {field:'name',headerName:"Name",width:170,sortable: false,filterable: false },
    {field:'batch',headerName:"Batch",width:170,sortable: false,filterable: false },
    {field:'gender',headerName:"Gender",width:170,sortable: false,filterable: false },
    {field:'education',headerName:"Education",width:100, sortable: false,filterable: false},
    {headerName:"Action", widht:30,sortable: false,filterable: false ,renderCell: (params) => {
        return (
         
           <div>
            
           <ModeIcon color="primary"
           onClick={() =>navigate(`/edit/${params.row.id}`)} 
           
          />
          <DeleteIcon  onClick={(e) => deleteStudent(e, params.row)} />
        </div>
         
        );
      } },
     



      

]   

  return (
    <div className='studentcard'>
        <DataGrid sx={{ m: 10 }} 
        rows={students}
        columns={columns}
        pageSizeOptions={[5, 10]}
        
        disableColumnSelector
        
       
        />

    <Button variant="contained" onClick={()=>navigate('/add')}>ADD Student</Button>

        
    </div>
  )
}

export default Display