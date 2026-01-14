"use client";

import Image from "next/image";
import { useState } from "react";
import DownloadIcon from "../../../svg/downloadIcon";

interface LogoDownloadProps {
  image: string;
  downloads: {
    svg?: string;
    ai?: string;
    pdf?: string;
    png?: string;
    jpg?: string;
    zip?: string;
    gif?: string;
  };
}



export default function LogoDownload({ image, downloads }: LogoDownloadProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="logo-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Image
        src={image}
        alt="Brand Logo"
        width={470}
        height={263}
        className="logo-img"
        onClick={() => setOpen(!open)} // mobile support
      />

      {open && (
        <div className="download-popup">
          <p className="popup-title">Download</p>

          {downloads.svg && <a href={downloads.svg} download><span>SVG</span><span><DownloadIcon type="image/svg+xml"/></span></a>}
          {downloads.ai && <a href={downloads.ai} download><span>AI</span><span><DownloadIcon type="image/svg+xml"/></span></a>}
          {downloads.pdf && <a href={downloads.pdf} download><span>PDF</span><span><DownloadIcon type="image/svg+xml"/></span></a>}
          {downloads.png && <a href={downloads.png} download><span>PNG</span><span><DownloadIcon type="image/svg+xml"/></span></a>}
          {downloads.jpg && <a href={downloads.jpg} download><span>JPG</span><span><DownloadIcon type="image/svg+xml"/></span></a>}
          {downloads.gif && <a href={downloads.gif} download><span>GIF</span><span><DownloadIcon type="image/svg+xml"/></span></a>}

          {downloads.zip && (
            <>
             
              <a href={downloads.zip} download className="zip">
                <span>All files ZIP</span><span><DownloadIcon type="image/svg+xml"/></span>
              </a>
               <div className="dividerBG"></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
