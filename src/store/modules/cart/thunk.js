import { addcart, removecart } from "./action";

export const addcartThunk = (product) => {
  return (dispatch, getStore) => {

   
    dispatch(addcart(product));
  };
};
export const removecartThunk = (id, setCartQt,cartQt,list,update,setUpdate) => {
  return (dispatch, getStore) => {
    let { cart } = getStore();
    
    let aux=cart.find((item)=>item.id===id)
    
    if(aux){
      cart.forEach((element,index) => {
     
        if(element.id===aux.id){
         aux.quantity-=1
         cart[index]=aux
         list=cart
        }
        if(element.quantity===0){
         
          cart=cart.filter((item)=>item.id!==aux.id)
          setCartQt(cartQt-1)
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
   
    list=JSON.parse(localStorage.getItem("cart"))
 
    setUpdate(update+1)
    
    dispatch(removecart(cart));
  };
};
