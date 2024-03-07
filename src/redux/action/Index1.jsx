export const  addcart = (product) => {
    return {
        type : "AddITEM",
      payload : product
  
    }
  }
  //delete item from cart
  export const  delcart = (product) => {
    return {
        type : "DELITEM",
      payload : product
  
    }
  }