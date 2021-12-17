import React from 'react';
import CarouselDiv from "./CarouselDiv";

class CarouselSlide extends React.Component {
    render() {
        return (
            <CarouselDiv content={this.props.content}>
                {this.props.children}
            </CarouselDiv>
        );
    }
}


export default CarouselSlide;