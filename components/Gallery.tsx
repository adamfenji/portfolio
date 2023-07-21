import "../styles/gallery.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Gallery() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-70vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    return (
        <div className="galleryContainer">
            <div className="galleryDescription">
                <h3>Projects</h3>
                <p>Welcome to my project showcase! Immerse yourself in a testament to the harmonious blend of design and functionality.</p>
            </div>

            <section className="scroll-section-outer">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                        <div className="laptop-container scroll-section">
                            <img className="laptop-size" src="https://github.com/adamfenji/portfolio/blob/main/img/laptop-container.png?raw=true" />
                            <video autoPlay loop className="video-size">
                                <source src="https://github.com/adamfenji/portfolio/blob/main/video/weatherflipper-vid.mp4?raw=true" type="video/mp4" />
                            </video>
                        </div>

                        <div className="laptop-container scroll-section">
                            <img className="laptop-size" src="https://github.com/adamfenji/portfolio/blob/main/img/laptop-container.png?raw=true" />
                            <img className="video-size" src="https://github.com/adamfenji/portfolio/blob/main/img/gameHub-img.png?raw=true" />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Gallery;

