import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../Service/api";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const useStyles = makeStyles({
    thead: {
        '& > *': {
            fontSize: 25,
            background: '#ff5757',
            color: '#FFFFFF',
        }
    },
    row: {
        '& > *': {
            color: '#FFFFFF',
            fontSize: 20
        }
    }
});

const AllContacts = () => {

    const [contacts, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, [])

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell> ID </TableCell>
                        <TableCell> Name </TableCell>
                        <TableCell> Username </TableCell>
                        <TableCell> Email </TableCell>
                        <TableCell> Phone </TableCell>
                        <TableCell> </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        contacts.map(user => (
                            <TableRow className={classes.row} key={user.id}>
                                <TableCell> {user.id} </TableCell>
                                <TableCell> {user.name} </TableCell>
                                <TableCell> {user.username} </TableCell>
                                <TableCell> {user.email} </TableCell>
                                <TableCell> {user.phone} </TableCell>
                                <TableCell> 
                                    <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Container>
    )
}

export default AllContacts;