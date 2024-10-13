const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-4 sm:px-6 sm:w-[80%] mx-auto my-8 sm:my-12 ">
      {children}
    </div>
  );
};

export default Wrapper;
