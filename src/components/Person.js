import React, {useContext} from "react";
import { MyContext } from "../context/MyContext";

const context = useContext(MyContext)

const Person = () => {
  console.log(context)
  return (
    <div className="person">
      <p>Age: ...</p>
      <p>Name: ...</p>
      <button>🍰🍥🎂</button>
    </div>
  );
};

export default Person;
