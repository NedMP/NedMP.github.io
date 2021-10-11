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
                {/* <div class="container">
				    <h1>{this.state.currentPage}</h1>
                </div> */}
				<section class="container-fluid px-0">
        			<div class="row align-items-center content">
            			<div class="col-md-6 order-2 order-md-1">
                			<img src="imgs/milk.png" alt="" class="img-fluid">
            			</div>
            			<div class="col-md-6 text-center order-1 order-md-2">
                			<div class="row justify-content-center">
                    			<div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        			<h2>MUSEUM OF CANDY</h2>
                        			<img src="imgs/lolli_icon.png" alt="" class="d-none d-lg-inline">
                        				<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                            				beatae, maiores deserunt
                            				in voluptatibus
                            				aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                            				repellat eveniet quidem
                            				voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                            				autem nam ex deserunt debitis
                            				eaque ratione! Nobis, quidem assumenda.</p>
                    			</div>
                			</div>
            			</div>
        			</div>
				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, root);
