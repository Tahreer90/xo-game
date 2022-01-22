import { useEffect, useState } from "react";

const Home = () => {
  const [btns, setBtns] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(0);

  const click = (index) => {
    if (btns[index] === "") {
      setTurn((turn) => turn + 1);

      const currentPlayer = turn % 2 === 0 ? "X" : "O";
      btns[index] = currentPlayer;

      setBtns([...btns]);
      const winner = checkWinner(currentPlayer);
      if (winner) {
        alert(`${winner} wins!`);
        clear();
      } else if (turn === 8) {
        alert("Draw");
        clear();
      }
    }
  };

  useEffect(() => {
    console.log("Componenet is mounted");

    return () => {
      console.log("component is unmounted");
    };
  }, [btns]);

  const clear = () => {
    setBtns(["", "", "", "", "", "", "", "", ""]);
    setTurn(0);
  };

  const checkWinner = (p) => {
    const r1 = [btns[0], btns[1], btns[2]].join("") === `${p}${p}${p}`;
    const r2 = [btns[3], btns[4], btns[5]].join("") === `${p}${p}${p}`;
    const r3 = [btns[6], btns[7], btns[8]].join("") === `${p}${p}${p}`;
    const c1 = [btns[0], btns[3], btns[6]].join("") === `${p}${p}${p}`;
    const c2 = [btns[1], btns[4], btns[7]].join("") === `${p}${p}${p}`;
    const c3 = [btns[2], btns[5], btns[8]].join("") === `${p}${p}${p}`;
    const d1 = [btns[0], btns[4], btns[8]].join("") === `${p}${p}${p}`;
    const d2 = [btns[2], btns[4], btns[6]].join("") === `${p}${p}${p}`;

    if (r1 || r2 || r3 || c1 || c2 || c3 || d1 || d2) {
      return p;
    }
    return false;
  };

  return (
    <div className="container">
      <button onClick={() => setTurn(turn + 1)}>increment turn</button>
      <h1>Turn: {turn}</h1>
      <div className="row">
        <div className="btn" onClick={() => click(0)}>
          {btns[0]}
        </div>
        <div className="btn" onClick={() => click(1)}>
          {btns[1]}
        </div>
        <div className="btn" onClick={() => click(2)}>
          {btns[2]}
        </div>
      </div>
      <div className="row">
        <div className="btn" onClick={() => click(3)}>
          {btns[3]}
        </div>
        <div className="btn" onClick={() => click(4)}>
          {btns[4]}
        </div>
        <div className="btn" onClick={() => click(5)}>
          {btns[5]}
        </div>
      </div>
      <div className="row">
        <div className="btn" onClick={() => click(6)}>
          {btns[6]}
        </div>
        <div className="btn" onClick={() => click(7)}>
          {btns[7]}
        </div>
        <div className="btn" onClick={() => click(8)}>
          {btns[8]}
        </div>
      </div>
    </div>
  );
};

export default Home;
