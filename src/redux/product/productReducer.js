import actionTypes from "./product.actions.type"

const INITIAL_STATE = {
    loading: false,
    products: [],
    error:""
}

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD: 
            return {
                ...state,
                loading:!state.loading,
            }
        case actionTypes.LOADSUCCESSFULL:
            return {
                ...state,
                products: [...state.products, ...action.payload],
                loading:false
            }
        case actionTypes.LOADFAILURE:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
         default:
            return state
        
    }
}
export default productReducer