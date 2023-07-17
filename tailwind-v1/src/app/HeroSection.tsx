import React from "react";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        height: "100vh",
        color: "white",
        textAlign: "left",
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a nisi
          at justo efficitur tempus. Donec maximus lobortis odio a sollicitudin.
          Vestibulum et felis a arcu convallis rhoncus. Suspendisse potenti. In
          hac habitasse platea dictumst. Suspendisse euismod consectetur velit,
          non hendrerit ante placerat at. Nunc tristique felis ut finibus
          tempus. Sed faucibus semper ipsum, ut placerat ex ullamcorper vitae.
          Nulla gravida lacus neque, non elementum neque fringilla non.
          Phasellus dictum, metus non tincidunt mollis, ligula nisi bibendum
          urna, et venenatis ex ante sed urna.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
