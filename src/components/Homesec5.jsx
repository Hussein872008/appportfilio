import React from 'react'
import image9 from "../assets/images/9.svg"
import image10 from "../assets/images/10.svg"
import image11 from "../assets/images/11.svg"

const Homesec5 = () => {
    return (
        <div className="why-webflow">
            <h1 className="title">Why Webflow.</h1>
            <div className="why-flex-container">
                {/* REASON 1 */}
                <div className="why-item">
                    <h2 className="reason-title">REASON 1</h2>
                    <h3 className="reason-heading">Next-Level Storytelling</h3>
                    <img src={image11} alt="Next-Level Storytelling" className="why-image" />
                    <p>Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.</p>
                </div>

                {/* REASON 2 */}
                <div className="why-item">
                    <h2 className="reason-title">REASON 2</h2>
                    <h3 className="reason-heading">Unbelievable Performance</h3>
                    <img src={image9} alt="Unbelievable Performance" className="why-image" />
                    <p>Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.</p>
                </div>

                {/* REASON 3 */}
                <div className="why-item">
                    <h2 className="reason-title">REASON 3</h2>
                    <h3 className="reason-heading">Developer-Free Tweaks</h3>
                    <img src={image10} alt="Developer-Free Tweaks" className="why-image" />
                    <p>Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.</p>
                </div>
            </div>
        </div>
    )
}

export default Homesec5
