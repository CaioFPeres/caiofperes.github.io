import React from 'react';
import CarouselDiv from "./CarouselDiv";

class CarouselSlide extends React.Component {
    render() {
        return (
            <CarouselDiv>
                {this.props.children}
            </CarouselDiv>
        );
    }
}


export default CarouselSlide;