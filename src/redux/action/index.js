
// export const LegionPro = () => {
//   return {
//     type: "PRO",
//     payload
//   }
// }

// export const LegionUnique = () => {
//   return {
//     type: "UNIQUE",
//     payload
//   }
// }

// export const LegionFresh = () => {
//   return 
// }
export const changeMode = (data) => {
  
  // console.log("rootReducer",data)
 return {
  type: 'CHANGE_MODE',
  payload: data
}}

export const Auth = (obj) => {
  console.log("obj", obj)
  return {
    type: "TOKEN",
    payload: obj
  }
}

export const Sign = (obj) => {
  console.log("obj", obj)
  return {
    type: "SIGN",
    payload: obj
  }
}

