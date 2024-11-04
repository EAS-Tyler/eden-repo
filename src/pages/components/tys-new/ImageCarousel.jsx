import React from "react";
import SwipeableViews from "react-swipeable-views";
import images from './Images';

const ImageCarousel = () => {

// have images passed in as props
    // const images = [
    //     zero,   
    //     one,
    //     two,
    //     three,
    // ];
    return (
        <SwipeableViews enableMouseEvents>
            {images.map((image, index) => (
                <div key={index} style={{ width: "100%", textAlign: "center" }}>
                    <img src={image} alt={`slide-${index}`} style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            ))}
        </SwipeableViews>
    );
};

export default ImageCarousel;
