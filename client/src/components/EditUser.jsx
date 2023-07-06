import { useState, useEffect } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import { getUser, editUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &> div {
        margin-top:5%;
    }
`

const devaultValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const Edituser = () => {
    const [user, setUser] = useState(devaultValue);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const loadUsersDetails = async () => {
            const response = await getUser(id);
            setUser(response.data);
            console.log(response.data);
        };
        loadUsersDetails();
    }, [id]);



    // const loadUsersDetails = async () => {
    //     const response = await getUser(id);
    //     setUser(response.data);
    //     console.log(response.data.name);
    // };


    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }
    // const {  } = user;
    const { name, username, email, phone } = user;
    // console.log(name, username, email, phone);
    return (
        <Container>
            <Typography variant='h4'>edit Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>edit User</Button>
            </FormControl>
        </Container>
    );
}
export default Edituser;