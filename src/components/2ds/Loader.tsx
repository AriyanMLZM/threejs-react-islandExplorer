const Loader = ({ title }: { title: string }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#111] text-white">
      <div className="flex h-[40px] w-[40px] animate-spin border-4 border-solid border-white" />
      <h2>{title}</h2>
    </div>
  );
};

export default Loader;
