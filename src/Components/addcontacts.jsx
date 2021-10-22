import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    conatiner: {
        width: "50%",
        margin: "5% 0 0 25%",
        "& > *" : {
            marginTop: 20
        }
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
        <FormGroup className={classes.conatiner}>
            <Typography variant="h4"> Add User </Typography>
            <FormControl>
                <InputLabel> Name </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>

            <FormControl>
                <InputLabel> UserName </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>

            <FormControl>
                <InputLabel> EMail </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>

            <FormControl>
                <InputLabel> Phone </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>

            <Button onClick={() => addUserDetail()} variant="contained" color="primary">Add User</Button>
        </FormGroup>
    )
}

export default NewContact;