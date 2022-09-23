import axios from 'axios';

import { ADDNEW_TODO } from './type';

const API_URL = "http://localhost:8000";
                                    // for reducers we dispatch the function
                                    // for that this is middleware async function (thunk)
export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        // dispatch to reducers (todoReducers)
        dispatch({type: ADDNEW_TODO, payload: res.data});
    } catch (error) {
        console.log("Error while calling addNewTodos API", error.message);
    }

}