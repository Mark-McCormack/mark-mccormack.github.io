import React, { useEffect, useState } from "react";

const DesktopSuggestionPopup = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Only show the popup on mobile or tablet devices (width <= 1024px)
    const isMobileOrTablet = window.innerWidth <= 1024;
    if (!isMobileOrTablet) return;

    const hasSeen = sessionStorage.getItem("seenDesktopSuggestion");
    if (!hasSeen) {
      setShowAlert(true);
      sessionStorage.setItem("seenDesktopSuggestion", "true");
    }
  }, []);

  if (!showAlert) return null;

  return (
    <div
      className="notification is-primary"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        zIndex: 1000,
      }}
    >
      <button className="delete" onClick={() => setShowAlert(false)} aria-label="close"></button>
      💬 For the best experience, we recommend using the desktop site.
    </div>
  );
};

export default DesktopSuggestionPopup;
