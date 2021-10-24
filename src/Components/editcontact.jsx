import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { editUser, getUsers } from '../Service/api';
import { useHistory, useParams } from 'react-router';

const useStyles = makeStyles({
    conatiner: {
        width: "50%",
        margin: "5% 0 0 25%",
        color: 'white',
        "& > *" : {
            marginTop: 20,
            color: 'white'
        }
    },
    head: {
        color: 'white'
    }
})

const initalValues = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

const EditContact = () => {
    const [ user, setUser ] = useState(initalValues);
    const { name, username, email, phone } = user;
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }
    
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetail = async() => {
        const response = await editUser(id, user);
        history.push("/all");
    }

    return (
        <FormGroup className={classes.conatiner}>
            <Typography variant="h4"> Edit Contact </Typography>
            <FormControl>
                <InputLabel className={classes.head}> Name </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='name' value={name} aria-describedby="my-helper-text" />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> UserName </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='username' value={username} aria-describedby="my-helper-text" />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> EMail </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='email' value={email} aria-describedby="my-helper-text" />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> Phone </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='phone' value={phone} aria-describedby="my-helper-text" />
            </FormControl>

            <Button style={{background: '#ff5757'}} onClick={() => editUserDetail()} variant="contained">Edit Contact</Button>
        </FormGroup>
    )
}

export default EditContact;