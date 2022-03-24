import React from "react";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem: "",
			list: [],
		};
	}

	updateInput(key, value) {
		//actualiza react state
		this.setState({
			[key]: value,
		});
	}
	addItem() {
		//crea un item con id unica
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice(),
		};
		//copia la lista actual de items
		const list = [...this.state.list];
		//añade un nuevo item a la lista
		list.push(newItem);
		//actualiza state con una nueva lista y resetea newItem
		this.setState({
			list,
			newItem: "",
		});
	}
	deleteItem(id) {
		const list = [...this.state.list];
		const updatedlist = list.filter((item) => item.id !== id);

		this.setState({
			list: updatedlist,
		});
	}
	render() {
		return (
			<div className="container">
				<div className="content">
					<h1>DailyTasks</h1>
					<br />
					<input
						id="inp"
						type="text"
						placeholder="Type item here..."
						value={this.state.newItem}
						onChange={(e) =>
							this.updateInput("newItem", e.target.value)
						}
					/>
					<button onClick={() => this.addItem()}>Add</button>
					<br />
					<ul>
						{this.state.list.map((item) => {
							return (
								<li key={item.id}>
									{item.value}
									<button
										id="delete"
										onClick={() =>
											this.deleteItem(item.id)
										}>
										x
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<div class="flap"></div>
			</div>
		);
	}
}

export default App;
