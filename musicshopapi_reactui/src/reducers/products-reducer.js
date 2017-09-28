const productsReducer = (state = {}, action) => {
  
    switch(action.type){
      case "GET_PRODUCTS_FULFILLED":{
          state = {...state,  products: action.payload, error: undefined } ;
        break;
      }
      case "GET_PRODUCTS_REJECTED":{ 
        state = {...state, products: undefined, error: action.payload.response};
        break;
      }    
      case "RESET_PRODUCT_SEARCH":{ 
        state = {...state, products: null, error:undefined};
        break;
      }  
      default:{break;}
    }
      return state;
  };
  
  export default productsReducer;