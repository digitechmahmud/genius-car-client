import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg';
import part from '../../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' relative w-1/2'>
                        <img src={person} alt='' className="w-4/5 rounded-lg shadow-2xl" />
                        <img src={part} alt='' className="w-3/5 right-4 top-1/2 border-8 absolute rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <h2 className='text-2xl text-orange-600 font-bold py-6'>About Us</h2>
                        <h2 className="text-5xl font-bold">We are qualified<br/> & of experience<br/> in this field</h2>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-orange-700">Get more info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;