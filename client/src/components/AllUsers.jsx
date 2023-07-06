import { useEffect } from 'react';
import { useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getUsers ,deleteUser } from '../service/api';
import { Button } from '@mui/material';

const STable= styled(Table)`
    width:80%;
    margin:5% auto 0 auto;
    &> div {
        margin-top:5%;
    }
`
const STableRow= styled(TableRow)`
    background:black;
    & > th{
        color: white;
    }
`


const AllUsers=()=>{

    const [users,setUsers] = useState([]);
    

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers= async ()=>{
        let response=await getUsers();
        setUsers(response.data);
    }
    const deleteUserDetails= async (id)=>{
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <STable>
            <TableHead>
                <STableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>functions</TableCell>
                </STableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{ marginRight: '5px'}} component={Link} to={`/edit/${user._id}`} >
                                    edit 
                                </Button>
                                <Button variant='contained' color='secondary' onClick={()=> deleteUserDetails(user._id)}>
                                    delete
                                </Button>
                            </TableCell>
                        </TableRow>
                        
                    ))
                }
            </TableBody>
        </STable>
    );
}

export default AllUsers;