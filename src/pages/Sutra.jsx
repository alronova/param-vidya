import { useParams } from "react-router-dom";

function Sutra() {
  const { id } = useParams();
  const idNumber = parseInt(id, 10);

  // Use idNumber as needed
  return <div>Sutra ID: {idNumber}</div>;
}

export default Sutra;
