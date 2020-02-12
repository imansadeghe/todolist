import React,{ Component } from 'react';
import './App.css';
import { observer }  from "mobx-react"

import Todoheader from "./components/todoheader"
import Todoitems from "./components/todoitems"

import Footer from "./components/footer"

 
@observer
class App extends Component {

  render() {
    return (
          <div id="todoapp" className="todoapp">
            <Todoheader />  
            <Todoitems /> 
            <Footer />
          </div>
          
    );
}

}


export default App;