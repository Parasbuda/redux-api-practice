import actionTypes from "./product.actions.type"
import { baseUrl } from "../../config"
import axios from "axios"

export const fetchdata = () => {

    return   function (dispatch) {
        dispatch(fetchProduct())
        axios.get(baseUrl+"product")
            .then(response => {
                const products = response.data
                console.log("inside the")
                dispatch(fetchProductSuccessful(products))
            })
            .catch(error => {
                const errormsg=error.message
                dispatch(fetchProductFailure(errormsg))

            })
        console.log("outside then")
    }
}

export const fetchProduct = () => ({
    type:actionTypes.LOAD
})

export const fetchProductSuccessful = (products) => ({
    type: actionTypes.LOADSUCCESSFULL,
    payload:products
})
export const fetchProductFailure = (errormsg) => ({
    type: actionTypes.LOADFAILURE,
    payload:errormsg
})