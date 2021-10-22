import axios from "axios";

const url = "http://localhost:3003/contacts";

export const getUsers = async(id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}