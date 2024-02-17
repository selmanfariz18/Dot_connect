import React, { useState } from "react";

const MainPage = () => {
  const [selectedButton, setSelectedButton] = useState("");

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
      {/*row 1*/}
      <div className="row">
        {/* Button at the top-left corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C1")}
        >
          R1C1
        </button>

        {/* Button at the top-center position */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C2")}
        >
          R1C2
        </button>

        {/* Button at the top-right corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C3")}
        >
          R1C3
        </button>
      </div>
      {/*row 2*/}
      <div className="row">
        {/* Button at the top-left corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C1")}
        >
          R1C1
        </button>

        {/* Button at the top-center position */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C2")}
        >
          R1C2
        </button>

        {/* Button at the top-right corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C3")}
        >
          R1C3
        </button>
      </div>
      {/*row 3*/}
      <div className="row">
        {/* Button at the top-left corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C1")}
        >
          R1C1
        </button>

        {/* Button at the top-center position */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C2")}
        >
          R1C2
        </button>

        {/* Button at the top-right corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C3")}
        >
          R1C3
        </button>
      </div>
      {/*row 4*/}
      <div className="row">
        {/* Button at the top-left corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C1")}
        >
          R1C1
        </button>

        {/* Button at the top-center position */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C2")}
        >
          R1C2
        </button>

        {/* Button at the top-right corner */}
        <button
          style={{
            backgroundColor: selectedButton === "R1C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C3")}
        >
          R1C3
        </button>
      </div>
      {selectedButton && <p>Selected: {selectedButton}</p>}
    </div>
  );
};

export default MainPage;
