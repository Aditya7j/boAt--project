import { ADD_DATA } from "./action"

const init_store ={
    cart:[],
    quantity:0,
    

}

export const reducer=(store=init_store,{type,payload})=>{
    if(type===ADD_DATA){
        return {...store,cart:[...store.cart,payload]}
    }
    else{
        return store
    }
}

