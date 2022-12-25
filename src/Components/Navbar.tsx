import title from "../images/logo.svg"

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[90%] h-36 border border-slate-500 rounded-md border-2 text-white text-2xl flex p-3 max-w-3xl mt-[5%]">
      <img src={title} alt="title" className="h-20 self-center pl-3"/>
      {children}
    </div>
  );
};

export default Navbar;
