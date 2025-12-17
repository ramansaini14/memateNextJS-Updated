"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const baseImages = [
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask01.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask02.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask03.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask04.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask05.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask06.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask07.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask08.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask09.png",
];

const images = Array.from({ length: 9 }, (_, i) =>
  baseImages[i % baseImages.length]
);

export default function InfiniteDualSlider() {
const col1Ref = useRef(null);
const col2Ref = useRef(null);
const col3Ref = useRef(null);

  const pausedRef = useRef(false); 

  useEffect(() => {
   let y1 = 0;
   let y2 = 0;
   let y3 = 0;
    let rafId;

const speed1 = 0.015;
const speed2 = 0.01;
const speed3 = 0.01;

    const onEnter = () => (pausedRef.current = true);
    const onLeave = () => (pausedRef.current = false);

    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    col1.addEventListener("mouseenter", onEnter);
    col1.addEventListener("mouseleave", onLeave);
    col2.addEventListener("mouseenter", onEnter);
    col2.addEventListener("mouseleave", onLeave);

    const animate = () => {
      if (!pausedRef.current) {
        y1 -= speed1;
        y2 -= speed2;
        y3 -= speed3;

        if (y1 <= -50) y1 = 0;
        if (y2 <= -50) y2 = 0;
        if (y3 <= -50) y3 = 0;
    col1Ref.current.style.transform = `translateY(${y1}%)`;
    col2Ref.current.style.transform = `translateY(${y2}%)`;
    col3Ref.current.style.transform = `translateY(${y3}%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      col1.removeEventListener("mouseenter", onEnter);
      col1.removeEventListener("mouseleave", onLeave);
      col2.removeEventListener("mouseenter", onEnter);
      col2.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (

<div className="bg_slider ">
    <div className="zeroshadowRight"></div>
  <div className="fade fade-top " />
  <div className="ui-grid">
    <div className="ui-col">
      <div className="slide_track" ref={col1Ref}>
        {[...images, ...images].map((img, i) => (
          <div className="ui-card card-sm" key={`c1-${i}`}>
            <Image src={img} alt="" width={420} height={300} />
          </div>
        ))}
      </div>
    </div>

    <div className="ui-col">
      <div className="slide_track" ref={col2Ref}>
        {[...images, ...images].map((img, i) => (
          <div className="ui-card card-lg" key={`c2-${i}`}>
            <Image src={img} alt="" width={420} height={420} />
          </div>
        ))}
      </div>
    </div>

    <div className="ui-col">
      <div className="slide_track" ref={col3Ref}>
        {[...images, ...images].map((img, i) => (
          <div className="ui-card card-md" key={`c3-${i}`}>
            <Image src={img} alt="" width={420} height={360} />
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="zeroshadowLeft"></div>
  <div className="fade fade-bottom" />
</div>

  );
}
