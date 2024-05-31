import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        type="buttton"
        onClick={() => {
          let a = 1;
          while (a < 453) {
            console.log(`${a}`);
            document.write(`${a}, \n`);
            a++;
          }
        }}
      >
        While
      </button>
      <button
        onClick={() => {
          let a = 454;
          do {
            console.log(`${a}`);
            document.write(`${a}, \n`);
            a++;
          } while (a < 491);
        }}
      >
        Do While
      </button>
      <button
        onClick={() => {
          for (let a = 492; a <= 1000; a++) {
            if (a > 567 && a < 789) {
              continue;
            }
            console.log(a);
            document.write(`${a}, \n`);
          }
        }}
      >
        For Loop
      </button>
      {/* eliminatedTables = [453, 491, 567, 656, 666, 789];
       eliminatedMultiples = [7, 8, 9, 10, 17, 25, 36, 47, 55, 63, 84]; */}
      <button
        onClick={() => {
          for (let a = 1; a <= 1000; a++) {
            if (
              (a > 452 && a < 454) ||
              (a > 490 && a < 492) ||
              (a > 566 && a < 568) ||
              (a > 655 && a < 657) ||
              (a > 665 && a < 667) ||
              (a > 788 && a < 790)
            ) {
              continue;
            }
            for (let b = 1; b <= 100; b++) {
              if (
                (b > 6 && b < 11) ||
                (b > 16 && b < 18) ||
                (b > 24 && b < 26) ||
                (b > 35 && b < 37) ||
                (b > 46 && b < 48) ||
                (b > 54 && b < 56) ||
                (b > 62 && b < 64) ||
                (b > 83 && b < 85)
              ) {
                continue;
              }
              console.log(`${a} * ${b} = ${a * b}`);
              document.write(`${a} * ${b} = ${a * b}<br>\n`);
            }
          }
        }}
      >
        Nested Loop
      </button>
    </div>
  );
}

export default App;
