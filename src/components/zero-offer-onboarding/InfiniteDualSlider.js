"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const baseImages = [
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867514/Mask_t0acig.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867565/Mask_1_ccqn4x.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867565/Mask_1_ccqn4x.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867666/Mask_3_mbpn3k.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867932/Mask_4_uheb5y.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867931/Mask_5_siltbl.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867930/Mask_6_mvz2p8.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765867930/Mask_7_ndcm7h.png",
  "https://res.cloudinary.com/dn0jqjad3/image/upload/v1765868112/Mask_8_kfnsjt.png",
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
const speed2 = 0.02;
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
