import { useEffect } from 'react';
import DOTS from 'vanta/src/vanta.dots'

const HeroSection = () => {
    useEffect(() => {
        DOTS({
            el: "#herobg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff8820,
            color2: 0xff8820,
            backgroundColor: 0x0,
            size: 2.00,
            spacing: 20.00,
            showLines: false,
        })
    }, [])
    
    return (
        <div className="animation-bg">
            <div id="herobg" className="heroSection">
                <div className="heroSubSection1">
                    <h1 className="heroText1">WHERE IDEAS BECOME SOFTWARE</h1>
                    <p className="heroText2">
                        Our expertise at DevLabs lies in translating imaginative ideas into
                        functional software solutions. Join us in shaping a digital future
                        that transforms concepts into reality.
                    </p>
                    <button className="heroBtn">
                        <span>Discover</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;