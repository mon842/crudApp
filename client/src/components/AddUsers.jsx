import { useState } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button} from '@mui/material';
import styled from '@emotion/styled';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom';

const Container =styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &> div {
        margin-top:5%;
    }
`

const devaultValue={
    name: '',
    username: '',
    email: '',
    phone: '',
}

const Adduser = () => {
    const navigate=useNavigate();
    const[user,setUser]= useState(devaultValue);

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const addUserDetails=async ()=>{
        await addUser(user);
        navigate('/all');
    }
    return (
        <Container>
            <Typography variant='h4'>Add Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" />
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" />
            </FormControl>
            
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
            <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    );
}
export default Adduser;