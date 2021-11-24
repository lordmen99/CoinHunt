
const initialState = {
    lightMode: true,
}
export const themereducer =(state=initialState,{type,payload})=>{
    // console.log("change mood", action.type)
    // console.log("change mood", action.payload)
    switch (type){
        case 'CHANGE_MODE':
            return{
                ...state,
                lightMode:payload
            }
            default:
                return state;
    }
}
// const {type , payload} = action;
//     if(type=='CHANGE_MODE'){
//         return {
//             ...state,
//             lightMode:payload
//         }
//     }
  
//       return state;
// }