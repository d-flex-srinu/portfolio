import React from 'react';
import test1 from './photos/Rectangle 3 (1).png'
import profile1 from './photos/Ellipse 2.svg'

function Testimonial() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='m-2'>
                    <h5 className='m-3' >Testimonial</h5>
                    <div className='row g-4'>
                        <div className="col-4">
                            <div className='person-a'>
                                <div>
                                    <img className='profile-banner' src={test1} alt="" />
                                    <div className='profile-img'>
                                        <img src={profile1} alt="" />
                                    </div>
                                </div>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                    usdemonstrate the visual form of a document or a typeface without relying on meaningful
                                    content. </p>
                                <p className='mb-0 fw-bold'>
                                    Joe Jhon
                                </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='person-a'>
                                <div>
                                    <img className='profile-banner' src={test1} alt="" />
                                    <div className='profile-img'>
                                        <img src={profile1} alt="" />
                                    </div>
                                </div>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                    usdemonstrate the visual form of a document or a typeface without relying on meaningful
                                    content. </p>
                                <p className='mb-0 fw-bold'>
                                    Alisha Beat
                                </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='person-a'>
                                <div>
                                    <img className='profile-banner' src={test1} alt="" />
                                    <div className='profile-img'>
                                        <img src={profile1} alt="" />
                                    </div>
                                </div>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                    usdemonstrate the visual form of a document or a typeface without relying on meaningful
                                    content. </p>
                                <p className='mb-0 fw-bold'>
                                    Joe Done
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
