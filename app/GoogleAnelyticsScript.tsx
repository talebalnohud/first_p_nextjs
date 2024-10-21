import Script from "next/script";
import React from "react";

const GoogleAnelyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagamanager.com/gatg/js?id=G-E720JHXSJ1"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', "G-E720JHXSJ1")`}
      </Script>
    </>
  );
};

export default GoogleAnelyticsScript;
