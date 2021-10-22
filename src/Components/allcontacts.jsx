import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../Service/api";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        width: "90%",
        margin: "50px 0 0 50px"
    },
    thead: {
        '& > *': {
            fontSize: 20,
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
});

const AllContacts = () => {

    const [contacts, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <Table className={classes.table}>
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
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    )
}

export default AllContacts;