import { useEffect, useState } from "react";
import StudentCard from "../StudentCard/studentCard";
import VictoryCard from "./Victory";
function SetStudentsDuel({ students, showResult, displayCards }) {
  const [firstMage, seFirstMage] = useState(Math.floor(Math.random() * 10) + 0);

  const [secondMage, setSecondMage] = useState(
    Math.floor(Math.random() * 10) + 0
  );
  const [thirdMage, setThirdMage] = useState(
    Math.floor(Math.random() * 10) + 0
  );

  const [participants, setmages] = useState([firstMage, secondMage, thirdMage]);
  const [winner, SetWinner] = useState(0);

  useEffect(() => {
    console.log("h");
    if (
      students[winner].alive !== true ||
      (winner != firstMage) & (winner != secondMage) & (winner != thirdMage)
    ) {
      SetWinner(participants[Math.floor(Math.random() * 2) + 0]);
      setmages([firstMage, secondMage, thirdMage]);
    }
    if (students[secondMage].house === students[firstMage].house) {
      setSecondMage(Math.floor(Math.random() * 10) + 0);
      setmages([firstMage, secondMage, thirdMage]);
    }
    if (
      students[thirdMage].house === students[firstMage].house ||
      students[thirdMage].house === students[secondMage].house
    ) {
      setThirdMage(Math.floor(Math.random() * 10) + 0);
      setmages([firstMage, secondMage, thirdMage]);
    }
  }, [firstMage, secondMage, thirdMage, winner, students, participants]);

  return (
    <div className="container">
      {students.length > 0 &&
      firstMage !== undefined &&
      secondMage !== undefined &&
      thirdMage !== undefined ? (
        <div>
          <div className={displayCards}>
            <StudentCard student={students[firstMage]} />
            <div className="separador"></div>
            <StudentCard student={students[secondMage]} />
            <div className="separador"></div>
            <StudentCard student={students[thirdMage]} />
            <div className="separador"></div>
          </div>
          <div className={showResult}>
            <VictoryCard student={students[winner]} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SetStudentsDuel;
