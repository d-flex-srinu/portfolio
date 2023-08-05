import React from 'react';
import patners1 from './photos/Group.svg'
import patners2 from './photos/image 8.svg'
import patners3 from './photos/Page-1.png'

function Patners() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='m-2 py-4 bg-white'>
                    <h5 className='m-3'>All Patners</h5>
                    <div className='row g-3'>
                        <div className="col-2">
                            <img src={patners1} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={patners2} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={patners3} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={patners1} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={patners2} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={patners3} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Patners
