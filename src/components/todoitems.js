import React , {Component} from "react"

import Todoitem from "./todoitem"

import addtodo from "../stroe/addtodo"

import {observer} from "mobx-react"
import { COMPLETED_TODOS, ACTIVE_TODOS,ALL_TODOS } from "../constants";

@observer
 class Todoitems extends Component{

  getVisibleTodos() {
		return addtodo.todos.filter(todo => {
			switch (addtodo.todosfiltered) {
				case ACTIVE_TODOS:
					return !todo.completed;
				case COMPLETED_TODOS:
					return todo.completed;
				default:
					return true;
			}
		});}
    
    render(){
        return(
              <section className="main">
              <ul className="todo-list">

             {
               addtodo.todoss.map(todo=>{    
                 return (
                   <Todoitem  todo={todo}/>
                 )
               })
             }
                
                {/* <li>
                  <div className="view">
                    <input type="checkbox" className="toggle" value="on" />
                    <label>new work</label>
                    <button className="destry"></button>

                  </div>
                </li>
              <Todoitem /> */}
              </ul>
            </section>
        )
    }
}
export default Todoitems