import React, { Component } from "react"
import "./App.css"
import { fetchdata } from "./redux/product/product.actions"
import {connect } from "react-redux"
class App extends Component {
  componentDidMount() {
    this.props.fetchdata()
  }
  render() {
    const { loading, products} = this.props
    
    
    return (
      <div>
        <h1>hello welocome to you</h1>
        <h5>welcome to you</h5>
        {loading ? <h1>Loading</h1> : <h1>The backend data is below:</h1>}
        <ul>
          {products.length && products.map((product, i) => {
            
            return (
              <li key={i}>{product.name}</li>
            )
          })
          }
        
        </ul>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  loading: state.product.loading,
  products: state.product.products,
  error:state.product.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchdata:()=>dispatch(fetchdata())
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
