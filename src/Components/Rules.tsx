import rulesImage from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";

interface RulesProps {
  toggleRules: () => void;
}

const Rules = ({ toggleRules }: RulesProps) => {
  return (
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] bg-[rgba(0,0,0,0.7)]"></div>
    <div className="w-[100vw] h-[100vh] lg:w-[26em] lg:h-[26em] bg-white z-[100] fixed top-[50%] -translate-y-[50%] flex flex-col items-center">
      <p className="mt-20 text-3xl text-dark-text lg:self-start lg:mt-8 lg:ml-8">
        RULES
      </p>
      <img src={rulesImage} alt="rules" className="mt-24 lg:mt-8" />
      <button
        style={{
          backgroundImage: `url(${closeIcon})`,
          backgroundRepeat: "no-repeat",
        }}
        className="w-6 h-6 mt-44 lg:mt-0 lg:absolute lg:right-8 lg:top-8"
        onClick={toggleRules}
      ></button>
    </div>
    </>
  );
};

export default Rules;
