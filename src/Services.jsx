import React from 'react'
import test1 from './photos/Rectangle 3 (1).png'
import test2 from './photos/Rectangle 3 (2).png'
import profile1 from './photos/Ellipse 22.png'
import profile2 from './photos/Ellipse 23.png'

function Services() {
    return (
        <div>
            <div className='container-fluid bg-services'>
                <div className='m-2 '>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <h5 className='m-3'>Services</h5>
                        </div>
                        <div>
                            <button className='btn btn-sm learn '>See More</button>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-6">
                            <div className='person-a'>
                                <div>
                                    <img className='profile-banner' src={test1} alt="" />
                                    <div className='profile-img'>
                                        <img src={profile1} alt="" />
                                    </div>
                                    <h5> Joe Jhon</h5>
                                </div>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                    usdemonstrate the visual form of a document or a typeface without relying on meaningful
                                    content. </p>
                                <button className='btn btn-sm learn '>Learn More</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='person-a'>
                                <div>
                                    <img className='profile-banner' src={test2} alt="" />
                                    <div className='profile-img'>
                                        <img src={profile2} alt="" />
                                    </div>
                                    <h5> Joe Biden</h5>
                                </div>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                    usdemonstrate the visual form of a document or a typeface without relying on meaningful
                                    content. </p>
                                <button className='btn btn-sm learn '>Learn More</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='person-a'>
                                <div>
                                    <img className='profile-banner' src={test1} alt="" />
                                    <div className='profile-img'>
                                        <img src={profile1} alt="" />
                                    </div>
                                    <h5> Joe Jhon</h5>
                                </div>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                    usdemonstrate the visual form of a document or a typeface without relying on meaningful
                                    content. </p>
                                <button className='btn btn-sm learn '>Learn More</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='person-a'>
                                <div>
                                    <img className='profile-banner' src={test2} alt="" />
                                    <div className='profile-img'>
                                        <img src={profile2} alt="" />
                                    </div>
                                    <h5> Joe Biden</h5>
                                </div>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                    usdemonstrate the visual form of a document or a typeface without relying on meaningful
                                    content. </p>
                                <button className='btn btn-sm learn '>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
