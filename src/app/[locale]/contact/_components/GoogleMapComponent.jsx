"use client";

const GoogleMapComponent = () => {
 
  return (
    <div
      style={{
        overflow: "hidden",
        maxWidth: "100%",
        width: "500px",
        height: "500px",
      }}
    >
      <div
        id="g-mapdisplay"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
      >
        <iframe
          style={{ height: "100%", width: "100%", border: 0 }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Lalla+meryem+Bloc+C,+Benslimane,+Maroc&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <a
        className="embed-ded-maphtml"
        href="https://www.bootstrapskins.com/themes"
        id="make-map-data"
      >
        premium bootstrap themes
      </a>
      <style>
        {`
      #g-mapdisplay img.text-marker { max-width: none !important; background: none !important; }
      img { max-width: none; }
    `}
      </style>
    </div>
  );
};

export default GoogleMapComponent;
