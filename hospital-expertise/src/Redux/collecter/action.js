export const  doctorname=(doc)=>(dispatch)=>{

    dispatch(docname(doc))
}
export const  timeslote=(time)=>(dispatch)=>{
    
    dispatch(timelode(time))
}


const docname=(payload)=>{
    return{type:"DOCTORNAME",payload}
}
const timelode=(payload)=>{
    return{type:"TIMESLOTE",payload}
}