import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    commentText:string;
    tokenText: string;
}

const initialState:RootState={
    commentText: 'Привет, Skillbox!',
    tokenText: ''

};


const UPDATE_COMMENT='UPDATE_COMMENT';


export  const updateComment:ActionCreator<AnyAction>=(text) =>({
    type:UPDATE_COMMENT,
    text,
})



const TOKEN='TOKEN';

export  const setToken:ActionCreator<AnyAction>=(text) =>({
    type:TOKEN,
    text,
})


export const rootReducer:Reducer<RootState>=(state=initialState, action) => {
    switch (action.type) {
       case UPDATE_COMMENT: 
        return {
            ...state,
            commentText: action.text,
        };

        case TOKEN: 
        return {
            ...state,
            tokenText: action.text,
        };

        
        default:
             return state;
    }
    
}