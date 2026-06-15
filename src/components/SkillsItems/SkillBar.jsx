const SkillBar = ({ width }) => {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="
          h-full
          bg-linear-to-r
          from-pink-500
          to-rose-500
          rounded-full
          transition-all
          duration-700
        "
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default SkillBar;
