import React, { useState } from "react";
import { useEffect } from "react";

//row constants
const rowHeight = "20px";
const rowWidth = "100px";
const rowPadding = "5px";
const rowFontsize = "10px";

//column constants
const colHeight = "20px";
const colWidth = "100px";
const colPadding = "5px";
const colFontsize = "10px";

const MainPage = () => {
  useEffect(() => {
    // Set a flag in localStorage when MainPage mounts
    localStorage.setItem("wasOnMainPage", "true");

    // Optional: Clean up the flag when leaving MainPage
    return () => {
      localStorage.removeItem("wasOnMainPage");
    };
  }, []);

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  return (
    <div>
      {/*row 1*/}
      <div className="row">
        <button
          style={{
            backgroundColor: selectedButtons.includes("R1C1")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R1C1")}
        >
          R1C1
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R1C2")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R1C2")}
        >
          R1C2
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R1C3")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
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
            backgroundColor: selectedButtons.includes("C1C1")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C1C1")}
        >
          C1C1
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("C1C2")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C1C2")}
        >
          C1C2
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("C1C3")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C1C3")}
        >
          C1C3
        </button>
        <button
          style={{
            backgroundColor: selectedButtons.includes("C1C4")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
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
            backgroundColor: selectedButtons.includes("R2C1")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R2C1")}
        >
          R2C1
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R2C2")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R2C2")}
        >
          R2C2
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R2C3")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R2C3")}
        >
          R2C3
        </button>
      </div>

      {/*colomn 2*/}
      <div className="column">
        <button
          style={{
            backgroundColor: selectedButtons.includes("C2C1")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C2C1")}
        >
          C2C1
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("C2C2")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C2C2")}
        >
          C2C2
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("C2C3")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C2C3")}
        >
          C2C3
        </button>
        <button
          style={{
            backgroundColor: selectedButtons.includes("C2C4")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C2C4")}
        >
          C2C4
        </button>
      </div>

      {/*row 3*/}
      <div className="row">
        <button
          style={{
            backgroundColor: selectedButtons.includes("R3C1")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R3C1")}
        >
          R3C1
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R3C2")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R3C2")}
        >
          R3C2
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R3C3")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R3C3")}
        >
          R3C3
        </button>
      </div>

      {/*colomn 3*/}
      <div className="column">
        <button
          style={{
            backgroundColor: selectedButtons.includes("C3C1")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C3C1")}
        >
          C3C1
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("C3C2")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C3C2")}
        >
          C3C2
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("C3C3")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C3C3")}
        >
          C3C3
        </button>
        <button
          style={{
            backgroundColor: selectedButtons.includes("C3C4")
              ? "green"
              : "gray",
            height: colHeight,
            width: colWidth,
            padding: colPadding,
            fontSize: colFontsize,
            transform: "rotate(90deg)",
          }}
          onClick={() => handleButtonClick("C3C4")}
        >
          C3C4
        </button>
      </div>

      {/*row 4*/}
      <div className="row">
        <button
          style={{
            backgroundColor: selectedButtons.includes("R4C1")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R4C1")}
        >
          R4C1
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R4C2")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R4C2")}
        >
          R4C2
        </button>

        <button
          style={{
            backgroundColor: selectedButtons.includes("R4C3")
              ? "green"
              : "gray",
            height: rowHeight,
            width: rowWidth,
            padding: rowPadding,
            fontSize: rowFontsize,
          }}
          onClick={() => handleButtonClick("R4C3")}
        >
          R4C3
        </button>
      </div>
      {selectedButtons.length > 0 && (
        <div>
          <p>Selected Buttons:</p>
          <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
            {selectedButtons.map((buttonId) => (
              <li key={buttonId} style={{ marginRight: "10px" }}>
                {buttonId}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainPage;
