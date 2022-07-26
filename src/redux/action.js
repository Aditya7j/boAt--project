export const ADD_DATA = "ADD_DATA";
 
export const addProduct = (payload)=>{
    return (
        {
        type:ADD_DATA,
        payload
        }
    )
}