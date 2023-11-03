import React from "react";
import feature_img from '@assets/img/bg/fea-3.png';
import Image from "next/image";
import Link from "next/link";

const feature_content = {
    title: "Revolutionize Your Email Marketing",
    info: <>Unlock the full potential of your business with our cutting-edge email marketing solutions. We specialize in crafting personalized and impactful email campaigns that resonate with your audience, driving engagement and conversions. Discover the power of targeted messaging and seamless integration with your existing CRM systems for a streamlined experience. Elevate your communication strategy with our expert services and watch your business thrive.</>,
}
const {title, info} = feature_content

const FeaturesArea = () => {
  return (
    <>
      <div className="features-3-area features-3-area-top pb-110 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 ">
              <div
                className="fea-3-img mb-30 wow fadeInLeft animated"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <Image src={feature_img} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 offset-xl-1">
              <div className="fea-3-content mb-30 pt-150">
                <span>About Our Services</span>
                <h2>{title}</h2>
                <p>{info}</p>
                <div className="mb-10"></div>
                <div data-aos="fade-up">
                  <Link href="/services/email-marketing" className="btn-grad">
                    <span>Explore Our Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesArea;
