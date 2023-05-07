const initialstate={
    doctor:"",
    timeslote:"",
   
}
export const reducer=(state=initialstate,{type,payload})=>{
    console.log(type,payload)
    switch (type) {
        case "DOCTORNAME":
            
          return{
            ...state,doctor:payload
          }
        case "TIMESLOTE":
            
          return{
            ...state,timeslote:payload
          }
    
        default:
           return  state;
    }
}

