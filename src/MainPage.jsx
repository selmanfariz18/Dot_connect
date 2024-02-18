import React, { useState } from "react";
import { useEffect } from "react";

// Row and column constants
const rowHeight = "20px";
const rowWidth = "100px";
const rowPadding = "5px";
const rowFontsize = "10px";
const colHeight = "20px";
const colWidth = "100px";
const colPadding = "5px";
const colFontsize = "10px";

const sets = [
  ["R1C1", "C1C2", "R2C1", "C1C1"],
  ["R1C2", "C1C3", "R2C2", "C1C2"],
  ["R1C3", "C1C4", "R2C3", "C1C3"],
  ["R2C1", "C2C2", "R3C1", "C2C1"],
  ["R2C2", "C2C3", "R3C2", "C2C2"],
  ["R2C3", "C2C4", "R3C3", "C2C3"],
  ["R3C1", "C3C2", "R4C1", "C3C1"],
  ["R3C2", "C3C3", "R4C2", "C3C2"],
  ["R3C3", "C3C4", "R4C3", "C3C3"],
];

const MainPage = () => {
  useEffect(() => {
    localStorage.setItem("wasOnMainPage", "true");
    return () => {
      localStorage.removeItem("wasOnMainPage");
    };
  }, []);

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [currentUser, setCurrentUser] = useState("User1");
  const [userPoints, setUserPoints] = useState({ User1: 0, User2: 0 });

  const handleButtonClick = (buttonId) => {
    if (!selectedButtons.includes(buttonId)) {
      setSelectedButtons([...selectedButtons, buttonId]);
      // Check for completed sets and assign points before switching turns
      checkAndAssignPoints(buttonId);
      // Switch turns
      setCurrentUser(currentUser === "User1" ? "User2" : "User1");
    }
  };

  const checkAndAssignPoints = (buttonId) => {
    const newUserPoints = { ...userPoints };
    sets.forEach((set) => {
      if (set.includes(buttonId)) {
        // Check if all buttons in the set are selected
        if (
          set.every((id) => selectedButtons.includes(id) || id === buttonId)
        ) {
          newUserPoints[currentUser] += 1; // Assign point to the current user
        }
      }
    });
    setUserPoints(newUserPoints);
  };

  return (
    <div>
      <p>
        Current Turn:<a style={{ fontSize: "30px" }}> {currentUser}</a>
      </p>
      <p>
        User1 Points:<a style={{ fontSize: "50px" }}> {userPoints.User1}</a> |
        User2 Points:
        <a style={{ fontSize: "50px" }}> {userPoints.User2}</a>
      </p>
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
    </div>
  );
};

export default MainPage;
