import React from 'react'
import image2 from "../assets/images/2.svg";
import image3 from "../assets/images/3.svg";
import image4 from "../assets/images/4.svg";
import image7 from "../assets/images/7.svg";
import image8 from "../assets/images/8.svg";

const Homesec4 = () => {
    return (
        <div className="section-container" id='process'>
            <img src={image8} alt="background" className="background-image" />
            <div className="how-its-done">
                <h2 className="title">How it's done.</h2>
                <div className="grid-container">
                    <div className="grid-item left">
                        <img src={image3} alt="" />
                        <div>
                            <h3>UX/UI Design</h3>
                            <p>Where concepts turn into a strategic user-experience.</p>
                        </div>
                    </div>
                    <div className="grid-item right">
                        <img src={image2} alt="" />
                        <div>
                            <h3>Webflow Development</h3>
                            <p>Where design turns into code.</p>
                        </div>
                    </div>
                    <div className="grid-item left">
                        <img src={image7} alt="" />
                        <div>
                            <h3>System Automation</h3>
                            <p>Where busywork gets delegated.</p>
                        </div>
                    </div>
                    <div className="grid-item right">
                        <img src={image4} alt="" />
                        <div>
                            <h3>SEO</h3>
                            <p>Where customers come flooding in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homesec4;
