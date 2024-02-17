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
        <button
          style={{
            backgroundColor: selectedButton === "R1C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C1")}
        >
          R1C1
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R1C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C2")}
        >
          R1C2
        </button>

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

      {/*colomn 1*/}
      <div className="column">
        <button
          style={{
            backgroundColor: selectedButton === "R1C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C1")}
        >
          R1C1
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R1C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C2")}
        >
          R1C2
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R1C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R1C3")}
        >
          R1C3
        </button>
        <button
          style={{
            backgroundColor: selectedButton === "C1C4" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("C1C4")}
        >
          C1C4
        </button>
      </div>

      {/*row 2*/}
      <div className="row">
        <button
          style={{
            backgroundColor: selectedButton === "R2C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R2C1")}
        >
          R2C1
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R2C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R2C2")}
        >
          R2C2
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R2C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R2C3")}
        >
          R2C3
        </button>
      </div>

      {/*row 3*/}
      <div className="row">
        <button
          style={{
            backgroundColor: selectedButton === "R3C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R3C1")}
        >
          R3C1
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R3C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R3C2")}
        >
          R3C2
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R3C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R3C3")}
        >
          R3C3
        </button>
      </div>

      {/*row 4*/}
      <div className="row">
        <button
          style={{
            backgroundColor: selectedButton === "R4C1" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R4C1")}
        >
          R4C1
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R4C2" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R4C2")}
        >
          R4C2
        </button>

        <button
          style={{
            backgroundColor: selectedButton === "R4C3" ? "green" : "gray",
            margin: "5px",
          }}
          onClick={() => handleButtonClick("R4C3")}
        >
          R4C3
        </button>
      </div>
      {selectedButton && <p>Selected: {selectedButton}</p>}
    </div>
  );
};

export default MainPage;
