import express from 'express';
import { getUsers, addUser, getUser, updateUser, deleteUser } from '../controller/user_controller'

const route = express.Router();

route.get('/', getUsers);
route.post('/add', addUser);
route.get('/:user_id', getUser);
route.put('/:user_id', updateUser);
route.delete('/:user_id', deleteUser);
export default route;