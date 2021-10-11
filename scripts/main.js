const root = document.getElementById('root');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 'Home'
		};
	}
	homePage = () => {
		this.setState({ currentPage: 'Home' });
        document.getElementById("home").classList.add("active");
        document.getElementById("about").classList.remove("active");
	};
	aboutPage = () => {
		this.setState({ currentPage: 'About' });
        document.getElementById("about").classList.add("active");
        document.getElementById("home").classList.remove("active");
	};
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<div class="container-lg">
						<a class="navbar-brand" href="#">
							~$ Ned Perkins<span class="blink">_</span>
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbar"
						>
							<span class="navbar-toggler-icon" />
						</button>
						<div class="collapse navbar-collapse" id="navbar">
							<div class="navbar-nav ms-lg-auto">
								{/* <a class="nav-link active" id="home" onClick={this.homePage}>
									Home
								</a>
								<a class="nav-link" id="about" onClick={this.aboutPage}>
									About
								</a> */}
								<a class="nav-link" href="https://www.linkedin.com/in/nedprks/">
									<i class="fab fa-linkedin-in"></i>
								</a>
								<a class="nav-link" href="https://www.instagram.com/nedprks/">
									<i class="fab fa-instagram"></i>
								</a>
								<a class="nav-link" href="https://twitter.com/nedprks">
									<i class="fab fa-twitter"></i>
								</a>
							</div>
						</div>
					</div>
				</nav>
                <div class="container">
				    <h1>{this.state.currentPage}</h1>
                </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, root);
