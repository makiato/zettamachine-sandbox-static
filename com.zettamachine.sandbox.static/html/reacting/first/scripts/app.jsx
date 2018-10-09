class Hello extends React.Component {
	
	constructor() {
		super();
		this.state = {
			user: 'Alfred',
			color: 'red',
			articles: [] 	
		};
		this.update = this.update.bind(this); 
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	
	componentDidMount() {
		//axios.get('http://jsonplaceholder.typicode.com/todos')
		axios.get('data/articles.json')
		.then(function (response) {
			console.log(response.data.data.articles);
			//this.setState({color: 'green'});
		})
		.catch(function (error) {
		   	console.log('Error caught -> ' + error);
		});   
	}
	
	render() {
		var articleList = this.state.articles.map((article) => <li>{article.title}</li>);
		return (
			<div>
				<h1 style={{color: `${this.state.color}`}}>Hello {this.state.user}</h1>
				<button onClick={this.update}>click</button>
				<ul>{articleList}</ul>
			</div>
		)
	}
	
	update() {
		this.setState({user: 'Joker', color: 'blue'});
	}
}

ReactDOM.render(
	<Hello/>, 
	document.getElementById("root")
);