import { combineReducers } from "redux";
import { UserReducer } from "../Reducers/Index";
import { themereducer } from "../Reducers/themereducer";
const rootReducer = combineReducers({
    
    UserReducer:UserReducer,
    themereducer:themereducer,
 
});

export default rootReducer;