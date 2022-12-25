import { useState } from "react";
import Rules from "./Rules";



const RulesButton = () => {

  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(prev => !prev);
  }
  return (
    <>
      <button className="border mb-12 border-slate-300 rounded-md px-10 py-2 text-slate-300 text-sm lg:self-end lg:mr-10 lg:mb-8" onClick={toggleRules}>
        RULES
      </button>
      {showRules && <Rules toggleRules={toggleRules}/>}
    </>
  );
};

export default RulesButton;
