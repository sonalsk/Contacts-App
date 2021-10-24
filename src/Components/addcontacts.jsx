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
    fstName: "",
    lastName: "",
    email: ""
}

const NewContact = () => {
    const [ contact, setUser ] = useState(initalValues);
    const { fstName, lastName, email } = contact;
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
                <InputLabel className={classes.head}> First Name </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='fstName' value={fstName} />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> Last Name </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='lastName' value={lastName} />
            </FormControl>

            <FormControl>
                <InputLabel className={classes.head}> E-Mail </InputLabel>
                <Input className={classes.head} onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>

            <Button style={{background: '#ff5757'}} onClick={() => addUserDetail()} variant="contained">Add Contact</Button>
        </FormGroup>
    )
}

export default NewContact;