"use client";

import LogoDownload from "./LogoDownload";


export default function EmailSignatureGrid() {
  return (
    <div className="brand-assets">
      <section>
        <div className="typography-grid">
          <LogoDownload
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/email-signatucher01.png"
            downloads={{
             svg: "/downloads/primary/logo-1.svg",
              ai: "/downloads/primary/logo-1.svg",
              pdf: "/downloads/primary/logo-1.png",
              png: "/downloads/primary/logo-1.zip",
              jpg: "/downloads/primary/logo-1.zip",
              zip: "/downloads/primary/logo-2.zip",
            }}
          />
          <LogoDownload
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/email-signatucher02.png"
            downloads={{
             svg: "/downloads/primary/logo-1.svg",
              ai: "/downloads/primary/logo-1.svg",
              pdf: "/downloads/primary/logo-1.png",
              png: "/downloads/primary/logo-1.zip",
              jpg: "/downloads/primary/logo-1.zip",
              zip: "/downloads/primary/logo-2.zip",
            }}
          />
        </div>
      </section>
    </div>
  );
}
