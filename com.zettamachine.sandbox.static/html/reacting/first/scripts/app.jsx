class Hello extends React.Component {
	
	constructor() {
		super();
		this.state = {
			user: "Alfred"	
		};
		this.update = this.update.bind(this); 
	}
	
	render() {
		return (
			<div>
				<h1 style={{color:red}}>Hello {this.state.user}</h1>
				<button onClick={this.update}>click</button>
			</div>
		)
	}
	
	update() {
		this.setState({user: "Joker"});
	}
}

ReactDOM.render(
	<Hello/>, 
	document.getElementById("root")
);