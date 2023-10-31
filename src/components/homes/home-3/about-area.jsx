import Image from 'next/image';
import React from 'react';
import about_us_img from "@assets/img/bg/hw-img.png";
const about_content = {
    subtitle: "Innovating Marketing & Engineering Solutions",
    title: "Driving Business Growth for the Next-Gen Enterprises",
    description: "Exclusive Medias LLC excels at delivering data-driven marketing strategies and cutting-edge engineering solutions. We're committed to fostering business growth, optimizing ROI, and ensuring unparalleled customer experiences."
};

const { subtitle, title, description } = about_content;

const AboutArea = () => {
    return (
        <>
           <div className="features-3-area pt-120 pb-110 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="fea-3-content pt-150">
                                <span>{subtitle}</span>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <div data-aos="fade-up">
                                    <a href="#" className="btn-grad"><span>Read more</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="fea-3-img-right wow fadeInRight animated" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <Image src={about_us_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default AboutArea;
