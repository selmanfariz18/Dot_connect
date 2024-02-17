import React, { useState } from "react";

const MainPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  // This function handles button clicks and sets the selected button
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  // Generate button names and positions
  const generateButtonLayout = () => {
    const layout = [];
    let buttonId = 0; // For naming buttons based on their position
    // Define matrix dimensions
    const rows = 6; // 6 rows total
    const cols = 6; // 6 columns total
    // Calculate total buttons to skip the center 3x3 matrix
    const totalButtons = 24;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Check if the position is on the border of the 6x6 matrix
        if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
          const buttonName = `R${i}C${j}`;
          layout.push(
            <button
              key={buttonName}
              style={{
                backgroundColor:
                  selectedButton === buttonName ? "green" : "initial",
              }}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          );
          buttonId++;
        }
      }
    }

    return layout;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "300px",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {generateButtonLayout()}
      </div>
      {selectedButton && <p>Selected: {selectedButton}</p>}
    </div>
  );
};

export default MainPage;
