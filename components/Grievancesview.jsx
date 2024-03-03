import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Topbar from '../Topbar/Topbar';

const Grievancesview = (props) => {
    var[grievance,setgrievance] = useState([]);
//    var[selected,setSelected] = useState();
    useEffect(()=>{
        console.log("hello")
        axios.get("http://localhost:4005/grievanceview/")
        .then(response =>{
            console.log(response.data)
            setgrievance(response.data)
        })
        .catch(err=>console.log(err))
    },[])
var result=
<div>
<div><Topbar xxx={props.checkLogout}/></div>
<div className='bbb'>
<h1>Grievances</h1><br/><br/>
<TableContainer component={Paper}>
<Table >
  <TableBody>
      {grievance.map((value,index)=>{
          return(
              <TableRow key={index}>
                  <TableCell>{value.grievance}</TableCell>
                  {/* <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell> */}
              </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>
</div>
  return (result)
}

export default Grievancesview