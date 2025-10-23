import React from "react";

// create a Carousel Function Component
function Carousel() {
    // return the Carousel (from .html code)
    return (
        <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
            >
            <div className="carousel-inner" role="listbox">

                <div
                    className="item active"
                    id="slide1"
                    style={{
                        background: "url(images/home/slide-1.jpeg) no-repeat center center",
                        backgroundSize: "cover",
                    }}
                    >
                    <div className="carousel-caption">
                        <div className="caption sfr slider-title">Breathtaking views</div>
                        <div className="caption sfl slider-subtitle">
                        Relaxation in the Bay of Belfalas
                        </div>
                        <a href="#" className="caption sfb btn btn-default btn-lg">
                        Learn More
                        </a>
                    </div>
                </div>

                <div
                className="item"
                id="slide2"
                style={{
                    background: "url(images/home/slide-2.jpeg) no-repeat center center",
                    backgroundSize: "cover",
                }}
                >
                <div className="carousel-caption">
                    <div className="caption sfr slider-title">The simple life</div>
                    <div className="caption sfl slider-subtitle">
                    Lush gardens in Mordor
                    </div>
                    <a href="#" className="caption sfb btn btn-default btn-lg">
                    Learn More
                    </a>
                </div>
                </div>
            </div>

            <a
                className="left carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="prev"
            >
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="right carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="next"
            >
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

// Export Carousel so can be Import in App.js
export default Carousel;
