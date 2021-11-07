import logo from "./logo.svg";
import "./stars.css";
import "./App.css";
import hogwartsCastle from "./img/hogwarts-castle.png";
import SetStudentsDuel from "./components/Student/student";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [Students, setStudents] = useState([]);
  const [display, setDisplay] = useState("menu");
  const [displayGame, setDisplayGame] = useState("display-none");
  const [displayVictory, setDisplayVictory] = useState("display-none");
  const [displayCards, setDisplayCards] = useState("container-cards");

  const filterStudents = (setstudent) => {
    setStudents(
      setstudent.filter(
        (mage) => mage.house !== "" && mage.image !== "" && mage.alive !== ""
      )
    );
  };

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => filterStudents(response));
  }, []);

  // Esta é a versão para entregar no prazo, mas estou trabalhando em outras funcionalidades (StudentActions)
  // O codigo estará com alguns comentarios, são as partes que eu estou trabalhando e não estão finalizadas
  // outras partes estarão sem comentarios pois não estão atrapalhando no funcionamento, no console irá mostrar
  // as partes que ainda não estão sendo usadas.

  /* const notify = () =>
    toast.error("Clique nos Feiticeiros!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "dark",
      icon: "🧙‍♀️",
    }); */

  const notify = () =>
    toast.error("Clique aqui para ver o vencedor!", {
      onClose: () => {
        setDisplayVictory("container-victory");
        setDisplayCards("display-none");
      },
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: 1,
      theme: "dark",
      icon: "🧙‍♀️",
    });

  return (
    <div className="container-game">
      <div className="container-star">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className={display}>
        <h1 id="titulo">
          <span className="wiggle">H</span>
          <span>o</span>
          <span className="wiggle">g</span>
          <span>w</span>
          <span className="wiggle">a</span>
          <span>r</span>
          <span className="wiggle">t</span>
          <span>s</span>
        </h1>
        <h2>Torneio tribuxo</h2>
        <p>clique no botao para encontrar os feiticeiros</p>
        <button
          onClick={() => {
            setDisplay("display-none");
            setDisplayGame("game");
            notify();
          }}
        >
          Começar!
        </button>
        <div className="container-background">
          {" "}
          <img src={hogwartsCastle} className="castle"></img>
        </div>
      </div>
      <div className={displayGame}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {displayGame === "game" && Students.length > 5 ? (
          <SetStudentsDuel
            students={Students}
            showResult={displayVictory}
            displayCards={displayCards}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
