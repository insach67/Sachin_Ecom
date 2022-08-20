import React  from "react"
import { BrowserRouter,Route } from "react-router-dom"
import CartState from "./ContextCart"
import Home from "./actualHome"
function App()
{
    return(
        <BrowserRouter>
            <Route exact path="/"component={CartState}/>
            <Route exact path="/context/:name" component={CartState}/>
        </BrowserRouter>
    )
}
export default App