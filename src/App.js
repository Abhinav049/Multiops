import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-sm bg-white fixed-top">
          <div class="container">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link 1
                </a>
              </li>
            </ul>
          </div>

          <div className="container">
            <p className="title1">My Food</p>
            <p className="title2">Mail</p>
          </div>
        </nav>
        <br></br>
        {/* 8 images */}
        <div className="container">
          <div
            className="card card1"
            style={{
              width: "240px",
              marginTop: "70px",
              marginLeft: "33px",
              float: "left",
            }}
          >
            <img
              class="card-img-top"
              src="img1.jpg"
              alt="Sandwich"
              style={{ height: "390px" }}
            />
            <div class="card-body">
              <h4 class="card-title">
                The Perfect Sandwich, A Real NYC Classic
              </h4>
              <p class="card-text">
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum.
              </p>
            </div>
          </div>
          {/* second card */}
          <div
            className="card"
            style={{
              width: "240px",
              marginTop: "70px",
              marginLeft: "20px",
              float: "left",
            }}
          >
            <img
              class="card-img-top"
              src="img2.jpg"
              alt="Steak "
              style={{ height: "390px" }}
            />
            <div class="card-body">
              <h4 class="card-title">
                The Perfect Sandwich, A Real NYC Classic
              </h4>
              <p class="card-text">
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum.
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "240px",
              marginTop: "70px",
              marginLeft: "20px",
              float: "left",
            }}
          >
            <img
              className="card-img-top"
              src="img3.jpg"
              alt="wine "
              style={{ height: "390px" }}
            />
            <div class="card-body">
              <h4 class="card-title">
                The Perfect Sandwich, A Real NYC Classic
              </h4>
              <p class="card-text">
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum.
              </p>
            </div>
          </div>
          {/* fourth card */}
          <div
            className="card"
            style={{
              width: "240px",
              marginTop: "70px",
              marginLeft: "20px",
              float: "left",
            }}
          >
            <img
              className="card-img-top"
              src="img4.jpg"
              alt="cherries "
              style={{ height: "390px" }}
            />
            <div class="card-body">
              <h4 class="card-title">
                The Perfect Sandwich, A Real NYC Classic
              </h4>
              <p class="card-text">
                Just some random text, lorem ipsum text praesent tincidunt ipsum
                lipsum.
              </p>
            </div>
          </div>
          {/* second row */}

          <div className="container">
            <div
              className="card"
              style={{
                width: "240px",
                marginTop: "70px",
                marginLeft: "20px",
                float: "left",
              }}
            >
              <img
                className="card-img-top"
                src="img5.jpg"
                alt="popsicle "
                style={{ height: "390px" }}
              />
              <div class="card-body">
                <h4 class="card-title">
                  The Perfect Sandwich, A Real NYC Classic
                </h4>
                <p class="card-text">
                  Just some random text, lorem ipsum text praesent tincidunt
                  ipsum lipsum.
                </p>
              </div>
            </div>
            {/* sixth card */}
            <div
              className="card"
              style={{
                width: "240px",
                marginTop: "70px",
                marginLeft: "20px",
                float: "left",
              }}
            >
              <img
                className="card-img-top"
                src="img6.jpg"
                alt="salmon "
                style={{ height: "390px" }}
              />
              <div class="card-body">
                <h4 class="card-title">
                  The Perfect Sandwich, A Real NYC Classic
                </h4>
                <p class="card-text">
                  Just some random text, lorem ipsum text praesent tincidunt
                  ipsum lipsum.
                </p>
              </div>
            </div>
            {/* seventh card */}
            <div
              className="card"
              style={{
                width: "240px",
                marginTop: "70px",
                marginLeft: "20px",
                float: "left",
              }}
            >
              <img
                className="card-img-top"
                src="img7.jpg"
                alt="sandwich "
                style={{ height: "390px" }}
              />
              <div class="card-body">
                <h4 class="card-title">
                  The Perfect Sandwich, A Real NYC Classic
                </h4>
                <p class="card-text">
                  Just some random text, lorem ipsum text praesent tincidunt
                  ipsum lipsum.
                </p>
              </div>
            </div>
            {/* 8th */}
            <div
              className="card"
              style={{
                width: "240px",
                marginTop: "70px",
                marginLeft: "20px",
              }}
            >
              <img
                className="card-img-top"
                src="img8.jpg"
                alt="sandwich "
                style={{ height: "390px" }}
              />
              <div class="card-body">
                <h4 class="card-title">
                  The Perfect Sandwich, A Real NYC Classic
                </h4>
                <p class="card-text">
                  Just some random text, lorem ipsum text praesent tincidunt
                  ipsum lipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="container" style={{ marginTop: "60px" }}>
          <p
            style={{ textAlign: "center", fontSize: "20px", marginTop: "40px" }}
          >
            About me, The Food Man
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="img9.jpg" alt="chef" style={{}} />
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "serif",
            }}
          >
            I am Who I Am!
          </p>
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            With Passion For Real, Good Food
          </p>
          <div className="container-fluid">
            <p style={{ textAlign: "center" }}>
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "40px" }}>
        <footer>
          <div class="container footer-section">
            <div class="row">
              <div class="col-md-4">
                <h5 class="fw-bold">FOOTER</h5>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
                <p>
                  Powered by{" "}
                  <a href="https://www.w3schools.com/w3css/">w3.css</a>
                </p>
              </div>

              <div class="col-md-4">
                <h5 class="fw-bold">BLOG POSTS</h5>
                <div class="d-flex mb-3">
                  <img src="img10.jpg" class="footer-img" alt="Post 1" />
                  <div>
                    <p class="mb-0 fw-bold">Lorem</p>
                    <small>Sed mattis nunc</small>
                  </div>
                </div>
                <div class="d-flex">
                  <img src="img11.jpg" class="footer-img" alt="Post 2" />
                  <div>
                    <p class="mb-0 fw-bold">Ipsum</p>
                    <small>Praes tinci sed</small>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <h5 class="fw-bold">POPULAR TAGS</h5>
                <div>
                  <span class="badge bg-dark text-white tag-badge">Travel</span>
                  <span class="badge bg-secondary tag-badge">New York</span>
                  <span class="badge bg-secondary tag-badge">Dinner</span>
                  <span class="badge bg-secondary tag-badge">Salmon</span>
                  <span class="badge bg-secondary tag-badge">France</span>
                  <span class="badge bg-secondary tag-badge">Drinks</span>
                  <span class="badge bg-secondary tag-badge">Ideas</span>
                  <span class="badge bg-secondary tag-badge">Flavors</span>
                  <span class="badge bg-secondary tag-badge">Cuisine</span>
                  <span class="badge bg-secondary tag-badge">Chicken</span>
                  <span class="badge bg-secondary tag-badge">Dressing</span>
                  <span class="badge bg-secondary tag-badge">Fried</span>
                  <span class="badge bg-secondary tag-badge">Fish</span>
                  <span class="badge bg-secondary tag-badge">Duck</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
