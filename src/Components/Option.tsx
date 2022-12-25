interface OptionProps {
  source: string;
  color: string;
}

const Option = ({ source, color }: OptionProps) => {
  return (
    <div
      className={"w-40 h-40 bg-white rounded-full grid place-items-center"} style={{background: `linear-gradient(${color})`}}
    >
        <div className="bg-white w-32 h-32 rounded-full grid place-items-center">
            <img src={source} alt="option" />
        </div>
    </div>
  );
};

export default Option;
