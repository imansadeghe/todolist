import React,{Component} from 'react';
import {observer} from 'mobx-react';
import { ACTIVE_TODOS, COMPLETED_TODOS } from './constants';

import Todoitem from './components/todoitem';

@observer
class TodoOverview extends Component {
	render() {
		<section>	<label htmlFor="toggle-all"></label>
			<ul className="todo-list">
				{this.getVisibleTodos().map(todo =>
					(<TodoItem
						key={todo.id}
						todo={todo}
						viewStore={viewStore}
					/>)
				)}
			</ul>
		</section>
	}

	getVisibleTodos() {
		return this.props.todoStore.todos.filter(todo => {
			switch (this.props.viewStore.todoFilter) {
				case ACTIVE_TODOS:
					return !todo.completed;
				case COMPLETED_TODOS:
					return todo.completed;
				default:
					return true;
			}
		});
	}

	toggleAll = (event) => {
		var checked = event.target.checked;
		this.props.todoStore.toggleAll(checked);
	};
}

export default TodoOverview
