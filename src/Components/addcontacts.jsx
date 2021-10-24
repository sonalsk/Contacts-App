import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    container: {
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

const NewContact = () => {
    const [ contact, setUser ] = useState(initalValues);
    const { name, username, email, phone } = contact;
    const classes = useStyles();
    const history = useHistory();
    
    const onValueChange = (e) => {
        setUser({ ...contact, [e.target.name]: e.target.value })
    }

    const addUserDetail = async() => {
        console.log(contact);
        await addUser(contact);
        history.push("./all");
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4"> Add New Contact </Typography>
            <FormControl>
                <InputLabel className={classes.head}> Name </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> UserName </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> EMail </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> Phone </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>

            <Button style={{background: '#ff5757'}} onClick={() => addUserDetail()} variant="contained">Add Contact</Button>
        </FormGroup>
    )
}

export default NewContact;