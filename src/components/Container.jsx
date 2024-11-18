const Container = ({ children }) => {
  return (
    <div className="pt-4 pb-10 md:pt-6 absolute top-0 z-[-2] container-bg flex flex-col w-full">
      {children}
    </div>
  );
};

export default Container;
