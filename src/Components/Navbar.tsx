const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[90%] h-36 border border-slate-500 rounded-md border-2 text-white text-2xl px-6 grid grid-rows-5 grid-cols-[100px_auto_120px] py-3 max-w-3xl">
      {children}
    </div>
  );
};

export default Navbar;
