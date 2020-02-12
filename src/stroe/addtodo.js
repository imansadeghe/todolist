import { observable, action , computed} from "mobx"
import todomodel from "./"
import * as Utils from '../utils';
import { ALL_TODOS } from '../constants';
import { Children } from "react";

 class Addtodo {

@observable todos = [] 
	lastid = 0
	@observable todoss = this.todos

	@action 
	getall(){
		this.todoss = this.todos
			
		
	}

	@action
	getactive(){
		this.todoss = this.todos.filter(
			todo => !todo.completed
		)
	}

	@action
	getcompleted(){
		this.todoss = this.todos.filter(
			todo => todo.completed
		)
	}

    @action
    addtodo(title){
        this.todos.push(new todomodel(this,title,false,this.lastid ++))
    }

    @computed get activeTodoCount() {
		return this.todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
		)
	}

	@computed get completedCount() {
		return this.todoss.length - this.activeTodoCount;
			
    }
    
    @action
	toggleAll (checked) {
		this.todos.forEach(
			todo => todo.completed = checked
		);
	}

	@action
	clearCompleted() {
		this.todoss = this.todos.filter(
			todo => !todo.completed
		);
		this.todos = this.todoss;	
	}

	@computed get todoscompletedcount() {
		return this.todos.filter(todo =>todo.completed).length;
	}

		

}
const addtodo = new Addtodo()
export default addtodo



