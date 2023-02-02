import { useDispatch } from "react-redux";

export const Test = () => {
  const countDispatch = useDispatch({
    action: "no matter it increase any way",
  });
  const countHandler = () => {
    countDispatch({ type: "no matter " });
  };

  return (
    <button onClick={countHandler} className=" p-5">
      {" "}
      click to add{" "}
    </button>
  );
};
