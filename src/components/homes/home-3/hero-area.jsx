import React, { useState } from 'react';
import Image from 'next/image';

import moc_up from "@assets/img/slider/mocup.png";
import VideoPopup from '@/src/modals/video-popup';

// Update hero content for Exclusive Medias LLC
const hero_content = {
  discount: "Exclusive Offer: 20% off for your first 1 service or contract.",
  title: "Cutting-Edge Solutions for Marketing and Engineering",
  info: <>Harness the power of modern technology to amplify your brand and operations. Expertly crafted solutions in marketing and engineering, tailored for your unique needs.</>,
};

const { discount, title, info } = hero_content;

const HeroArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="slider-area fix">
        <div className="shape-slider">
          {/* ... */}
        </div>
        <div className="single-slider slider-height-3 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="slider-text-1 slider-text-3">
                  <span className="d-block wow fadeInUp animated" data-wow-delay="0.2s">
                    {discount}
                  </span>
                  <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">{title}</h2>
                  <p className="wow fadeInUp animated" data-wow-delay="0.9s">{info}</p>
                  <div className="slider-btn wow fadeInUp animated" data-wow-delay="1.3s">
                    <a href="#" className="btn-grad"><span>Free Consultation</span></a>
                    <div className="sl-video d-inline">
                      <span>Our Portfolio</span>
                      <a className="popup-video"
                         onClick={() => setIsVideoOpen(true)}
                      ><i className="far fa-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="slider-img slider-img-3 wow fadeInRight animated" data-wow-duration="2.5s">
                  <Image src={moc_up} alt="Exclusive Medias LLC" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup 
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={"olboi3ttUi8"} // Update with your actual video ID
      />
      {/* video modal end */}
    </>
  );
};

export default HeroArea;
