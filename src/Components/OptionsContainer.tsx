import backgroundTriangle from "../images/bg-triangle.svg";

const OptionsContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="justify-self-auto flex justify-around flex-wrap max-w-[28em]" style={{backgroundImage: `url(${backgroundTriangle})`, backgroundSize: "60%", backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}>{children}</div>
  )
}

export default OptionsContainer