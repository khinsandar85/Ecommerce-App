const cart = [];

const handleCart = (state=cart , action) => {
    const product = action.payload;
    switch(action.type){
        case "ADDITEM" :
            //Check if product is Already Exist
            const exist = state.find( (x) => x.id === product.id);
            if(exist) {
                return state.map( (x) => 
                    x.id === product.id ? { ...x, qty: x.qty +1} : x
                );
            }else{
                const product = action.payload;
                return [
                    ...state,{
                        ...product, qty : 1
                    }
                ]
            }
        break;

        case "DELITEM":
            const exist1 = state.find( (y) => y.id === product.id);
            if(exist1.qty === 1){
                return state.filter((y) => y.id !== exist1.id);
            }else{
                return state.map( (y) => 
                    y.id === product.id ? {...y, qty: y.qty-1} : y
                );
            }
        break;
        default :  
            return state
        break;
    }
}
export default handleCart;