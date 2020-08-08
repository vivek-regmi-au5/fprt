import React, { Component } from "react";

class Carousal extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active view overlay">
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                }}
                class="d-block img-overlay"
                src={`https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107312566/original/4ef810792c139575d41e7decb7cdbd2fbd3e97ab/design-youtube-thumbnail-facebook-banners-ecommerce-ads.jpg`}
                alt="First slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .4)" }}
              >
                <h1 style={{ color: "white", zIndex: "1" }}>Fresh Offers</h1>
                <p class="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                style={{ width: "100%", height: "80vh" }}
                class="d-block"
                src={`https://slickdeals.net/blog/wp-content/uploads/2019/06/childrens-clothes-hero-1.jpg`}
                alt="Second slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .4)" }}
              >
                <h1>Sale on Kids Appearals</h1>
                <p class="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                style={{ width: "100%", height: "80vh" }}
                class="d-block"
                src={`https://ak.picdn.net/shutterstock/videos/1036421099/thumb/4.jpg`}
                alt="Second slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .4)" }}
              >
                <h1>Sale on electronics</h1>
                <p class="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                style={{ width: "100%", height: "80vh" }}
                class="d-block"
                src={`https://www.elvin1.com/uploads/1/1/9/0/119082772/vacheta-12-women-4k-banner_orig.jpg`}
                alt="Third slide"
              />
              <div
                class="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgba(0, 0, 0, .4)" }}
              >
                <h1>Huge Discounts on shoes</h1>
                <p class="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousal;
