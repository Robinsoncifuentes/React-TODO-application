import React from "react";
import { render } from "react-dom";
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
			<div className="App">
				<div>
					Add item...
					<br />
					<input
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
			</div>
		);
	}
}

export default App;
