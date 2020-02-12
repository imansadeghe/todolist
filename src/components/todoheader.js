import React,{Component} from "react"
import Addtodo from "../stroe/addtodo"

 export default  class Todoheader extends Component{
     state = {
         value:""
     }

     handleKeyDown = event=> {
        if (event.keyCode!==13){
            return;
        }
        event.preventDefault()
        Addtodo.addtodo(this.state.value)
        this.setState({
            value:''
        })
     }
    render(){
       
        return(
            <header className="header">
                <h1>what to do ?</h1>
                <input 
                value={this.state.value}
                onChange ={event => this.setState({value: event.target.value})}
                onKeyDown = {
                    event=>this.handleKeyDown(event)
                }
                type="text"
                className="new-todo"
                placeholder="what needs to be done?"/>

          </header>)
    }
}