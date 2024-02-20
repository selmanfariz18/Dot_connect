import React, { useState, useEffect } from "react";

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
  const [currentUser, setCurrentUser] = useState("");
  const [userPoints, setUserPoints] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  const [playerNames, setPlayerNames] = useState({ player1: "", player2: "" });

  const handleButtonClick = (buttonId) => {
    if (!selectedButtons.includes(buttonId)) {
      setSelectedButtons([...selectedButtons, buttonId]);
      checkAndAssignPoints(buttonId);
      setCurrentUser(
        currentUser === playerNames.player1
          ? playerNames.player2
          : playerNames.player1
      );
    }
  };

  const checkAndAssignPoints = (buttonId) => {
    const newUserPoints = { ...userPoints };
    sets.forEach((set) => {
      if (
        set.includes(buttonId) &&
        set.every((id) => selectedButtons.includes(id) || id === buttonId)
      ) {
        newUserPoints[currentUser] += 1;
      }
    });
    setUserPoints(newUserPoints);
  };

  const isGameOver = () => selectedButtons.length === 24;

  const getWinner = () => {
    const score1 = userPoints[playerNames.player1] || 0;
    const score2 = userPoints[playerNames.player2] || 0;

    if (score1 > score2) return playerNames.player1;
    else if (score1 < score2) return playerNames.player2;
    else return "Draw";
  };

  const restartGame = () => {
    setSelectedButtons([]);
    setCurrentUser(playerNames.player1);
    setUserPoints({ [playerNames.player1]: 0, [playerNames.player2]: 0 });
    setGameStarted(true);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setCurrentUser(playerNames.player1);
    setUserPoints({ [playerNames.player1]: 0, [playerNames.player2]: 0 });
    setGameStarted(true);
  };

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setPlayerNames({ ...playerNames, [name]: value });
  };

  if (!gameStarted) {
    return (
      <div>
        <form onSubmit={handleNameSubmit}>
          <label>
            Player 1 Name:
            <input
              type="text"
              name="player1"
              value={playerNames.player1}
              onChange={handleNameChange}
              required
            />
          </label>
          <br />
          <label>
            Player 2 Name:
            <input
              type="text"
              name="player2"
              value={playerNames.player2}
              onChange={handleNameChange}
              required
            />
          </label>
          <br />
          <button type="submit">Start Game</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <p>
        Current Turn:<a style={{ fontSize: "30px" }}> {currentUser}</a>
      </p>
      <p>
        <span style={{ color: "red" }}>{playerNames.player1}</span> Points:{" "}
        <span style={{ fontSize: "50px" }}>
          {userPoints[playerNames.player1] || 0}
        </span>{" "}
        |<span style={{ color: "orange" }}>{playerNames.player2}</span> Points:{" "}
        <span style={{ fontSize: "50px" }}>
          {userPoints[playerNames.player2] || 0}
        </span>
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
      {/* Game Over Overlay */}
      {isGameOver() && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <div>{getWinner() === "Draw" ? "Draw" : `${getWinner()} wins!`}</div>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
