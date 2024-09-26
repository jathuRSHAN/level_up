import React, { useState } from 'react';
import HeroImg1 from '../assets/hero15.png';
//import HeroImg2 from '../assets/hero12.png';
//import HeroImg3 from '../assets/hero13.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'Unlock Your Potential with Level Up',
        social: {
            twitter: '#',
            facebook: '#',
            linkedin: '#'
        }
    };

    // Slider state management
    //const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide] = useState(0);
    const images = [HeroImg1];
    //const images = [HeroImg1, HeroImg2, HeroImg3];

    // Change slide every 5 seconds
    // useEffect(() => {
    //     const slideInterval = setInterval(() => {
    //         setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    //     }, 2000);

    //     return () => clearInterval(slideInterval); // Cleanup on unmount
    // }, [images.length]);

    return (
        <section
            className='flex flex-col md:flex-row px-10 py-10 bg-primary '
            style={{
                backgroundImage: `url(${images[currentSlide]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out'
            }}
        >
            <div className='md:w-1/2 flex flex-col px-0 py-20'>
                <h1 className='text-black text-6xl font-hero-font'>
                    Hey there !, <br /> <span className='text-black'>Every professional starts as a beginner</span>
                    <p className='text-4xl '>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.social.twitter} className='pr-5 hover:text-white'>
                        <AiOutlineTwitter size={40} />
                    </a>
                    <a href={config.social.facebook} className='pr-5 hover:text-white'>
                        <AiOutlineFacebook size={40} />
                    </a>
                    <a href={config.social.linkedin} className='hover:text-white'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                </div>
            </div>
            {/* <img className='md:w-1/2 hidden md:block' src={images[currentSlide]} alt="Hero" /> */}
        </section>
    );
}
