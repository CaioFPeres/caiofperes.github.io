import React from 'react';
import "./CarouselDiv.css"


class CarouselDiv extends React.Component {

    handleMouseMove(e){

        let carousel = document.getElementById("carousel");
        let mainBack = document.getElementById("mainBack");
        let windowSize = mainBack.clientWidth;
        let CarouselSize = carousel.clientWidth;
        let beginning;
        let scrolling
        
        let ratio = ((CarouselSize*2)/carousel.scrollWidth); // random ratio numbers

        beginning = ((windowSize - CarouselSize)/2) + 200; // dividing by 2 to get the margin from the left, and + 200 to start a little to the right
        
        // dividing by ratio to be able to reach until the end 
        // (this will vary depending how many elements we have on the Carousel and page width)
        scrolling = (e.clientX - beginning)/(ratio); 
        
        
        if(CarouselSize < 800){
            beginning = ((windowSize - CarouselSize)/2) + 80;
            scrolling = (e.clientX - beginning)/(ratio - 0.25); // random ratio numbers
        }

        carousel.scrollTo(scrolling, 0);
    }

    render() {
        return(
            <div className="CarouselDiv" id="carousel" onMouseMove={ event => this.handleMouseMove(event)}>
                {this.props.children}
            </div>
        );
    };
}

export default CarouselDiv;