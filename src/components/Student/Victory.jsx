function VictoryCard({ student }) {
  return (
    <div className="container-victory">
      <h1>{student.name} Venceu o torneio!</h1>

      <img
        src={student.image.replace("http://", "https://")}
        alt=""
        srcset=""
      />
    </div>
  );
}

export default VictoryCard;
