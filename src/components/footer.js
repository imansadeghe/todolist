import React,{Component} from "react"
import addtodo from "../stroe/addtodo"
import {observer} from "mobx-react"

@observer
class Footer extends Component {
    
	clearCompleted = () => {
		addtodo.clearCompleted() ;
    };

  
    getall(){
        addtodo.getall()  
    }
    getactive(){
        addtodo.getactive()
    }
    getcompleted(){
        addtodo.getcompleted()
    }
    render(){
        return(
            <div className="footer">
                <span className="todo-count">
         <strong style={{backgroundColor:"yellow"}}>{addtodo.activeTodoCount}</strong> باقی    
                </span>

                <ul className="filters" >
                    <li className="bt" onClick={this.getall}>all</li>
                    <li className="bt" onClick={this.getactive} >active</li>
                    <li className="bt" onClick={this.getcompleted} >completed</li>
                </ul>
                { addtodo.completedCount === 0
					? null
					: 	<button
							className="clear-completed"
							onClick={this.clearCompleted}>
							Clear completed
						</button>
				}
            </div>
        )
        
    }
}

export default Footer