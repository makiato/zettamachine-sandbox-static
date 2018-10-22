class Hello extends React.Component {
	
	constructor() {
		super();
		this.state = {
			user: 'Alfred',
			color: 'red',
			articles: [{'body': 'loading'}] 	
		};
		this.update = this.update.bind(this); 
	}
	
	componentDidMount() {
		var component = this;
		axios.get('data/articles.json')
		.then(function (response) {
			console.log(response.data.data.articles);
			component.setState({articles: '[{"id": 1,"title": "M83 Midnight City","body": "In 2003, Frenchmen Anthony Gonzalez and Nicolas Fromageau enjoyed international acclaim with the album Dead Cities, Red Seas & Lost Ghosts, a luscious blend of shoegaze aesthetics, ambient pop, and progressive textures. But M83 had been releasing material for several years, having issued their self-titled debut through the tiny but taste-making French label Gooom in 2001. The success of Dead Cities, Red Seas brought attention not only to M83, but also to the Gooom label, which helped fuel the popularity of other glitchy, sleek, and vaguely psychedelic artists like Cyann & Ben. Fromageau departed the lineup after the second album, looking to pursue solo work instead, and Gonzalez returned to the studio for a follow-up record."},{"id": 2,"title": "Birdy Nam Nam Abesses","body": ""}]'});
			console.log(component.state.articles[0].body);
		})
		.catch(function (error) {
		   	console.log('Error caught -> ' + error);
		});   
	}
	
	render() {
		//var articleList = this.state.articles.map((article) => <li>{article.title}</li>);
		return (
			<div>
				<h1 style={{color: `${this.state.color}`}}>Hello {this.state.user}</h1>
				<p>{this.state.articles[0].body}</p>
				<button onClick={this.update}>click</button>
			</div>
		)
	}
	
	update() {
		this.setState({user: 'Joker', color: 'blue'});
	}
}

ReactDOM.render(
	<Hello/>, 
	document.getElementById("app")
);