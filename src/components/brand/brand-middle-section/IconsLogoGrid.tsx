"use client";

import LogoDownload from "./LogoDownload";


export default function IconsLogoGrid() {
  return (
    <div className="brand-assets">
      <section>
        <div className="logo-grid1">
            
          <LogoDownload
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-icons.png"
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
         <div className="things-to-avoid-guidelines">
                <h5>Things to avoid:</h5>
               <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/things-to-avoid-image.png" width="100%"  alt="Icons" /> 
            </div>
      </section>

    </div>
  );
}
