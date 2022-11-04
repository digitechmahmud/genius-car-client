import React from 'react';

const BannerItems = ({ slide }) => {
    // console.log(slide);
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousal-img'>
                <img src={image} alt='img' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                <h2 className='text-6xl text-white font-bold'>Affordable<br />Price For Car<br />Servicing</h2>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 top-1/2">
                <p className='text-xl text-white font-bold'>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-5 top-3/4">
                <button className="btn btn-outline btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;