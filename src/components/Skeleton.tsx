const Skeleton = () => {
  return (
    <div className="animate-pulse mb-6 w-5/6 mx-auto lg:w-full bg-mt-white rounded-lg shadow-lg shadow-lt-dark-gray overflow-hidden">
      <div className="animate-pulse">
        <div className="bg-slate-400 w-full h-32 rounded "></div>
        <div className="p-4 space-y-2">
          <h2 className="w-3/5 h-2 bg-slate-400 rounded-full"></h2>
          <p className="w-2/3 h-2 bg-slate-400 rounded-full"></p>
          <p className="w-1/2 h-2 bg-slate-400 rounded-full"></p>
          <p className="w-1/5 h-2 bg-slate-400 rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
