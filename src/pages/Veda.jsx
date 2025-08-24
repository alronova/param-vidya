import { useParams } from "react-router-dom";

function Veda() {
  const { id } = useParams();
  const idNumber = parseInt(id, 10);

  // Use idNumber as needed
  return <div>Veda ID: {idNumber}</div>;
}

export default Veda;
