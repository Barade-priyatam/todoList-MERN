import * as actionTypes from '../actions/type';

                            // state -> previous value which is not updated
                            //action -> object sent from dispatch from api function (addNewTodo)
export const todosReducers = (state = [], action) => {

    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state];
        
        
        default:
            return state;
    }

}

// export default todosReducers;
