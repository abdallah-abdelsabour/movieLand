import { FaStar } from "react-icons/fa";

const Star = ({ full, id }) => {
  console.log(id);
  if (full) {
    return (
      <span>
        <FaStar style={{ color: "yellow", fontSize: "2rem" }}></FaStar>;
      </span>
    );
  }
  return (
    <span>
      <FaStar style={{ color: "black", fontSize: "2rem" }}></FaStar>;
    </span>
  );
};

export default Star;
