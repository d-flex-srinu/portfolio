import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Testimonial from './Testimonial';
import Patners from './Patners';
import Services from './Services';
function Portfolio() {
    return (
        <div>
            <div>
                <Navbar />
                <Banner />
                <Testimonial />
                <Patners />
                <Services />
            </div>
        </div>
    )
}

export default Portfolio
