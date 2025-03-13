import { useEffect, useState } from "react";

const SnipcartLoader = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded) return;

    // Snipcart settings
    window.SnipcartSettings = {
      publicApiKey: "YOUR_API_KEY",
      loadStrategy: "on-user-interaction",
      version: "3.0",
      timeoutDuration: 2750,
      domain: "cdn.snipcart.com",
      protocol: "https",
      loadCSS: true,
    };

    // Function to load Snipcart script
    const loadSnipcart = () => {
      if (document.getElementById("snipcart-script")) return;

      setScriptLoaded(true);

      const head = document.getElementsByTagName("head")[0];
      
      // Inject Snipcart container if not exists
      if (!document.querySelector("#snipcart")) {
        const snipcartDiv = document.createElement("div");
        snipcartDiv.id = "snipcart";
        snipcartDiv.setAttribute("hidden", "true");
        document.body.appendChild(snipcartDiv);
      }

      // Inject Snipcart JS
      const script = document.createElement("script");
      script.id = "snipcart-script";
      script.src = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`;
      script.async = true;
      head.appendChild(script);

      // Inject Snipcart CSS if needed
      if (window.SnipcartSettings.loadCSS) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`;
        head.prepend(link);
      }

      // Remove event listeners after loading
      userEvents.forEach((event) => document.removeEventListener(event, loadSnipcart));
    };

    // List of user events to trigger script loading
    const userEvents = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
    userEvents.forEach((event) => document.addEventListener(event, loadSnipcart));

    // Fallback timer to load Snipcart if user doesn't interact
    setTimeout(loadSnipcart, window.SnipcartSettings.timeoutDuration);

    return () => {
      userEvents.forEach((event) => document.removeEventListener(event, loadSnipcart));
    };
  }, [scriptLoaded]);

  return null; // This component just loads Snipcart, no UI needed
};

export default SnipcartLoader;
