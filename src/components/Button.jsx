const Button = ({ text, isActive, onButtonClick }) => {
  const baseClasses =
    "cursor-pointer py-3 px-5 border border-[#2525251A] rounded-[8px] leading-[1] text-sm transition-all duration-200 ease-in-out";
  const activeClasses =
    "bg-[rgba(242,252,231,1)] font-semibold text-[rgba(7,39,35,0.8)]";
  const inactiveClasses = "text-[rgba(37,37,37,0.8)] ";

  return (
    <div>
      <button
        onClick={() => onButtonClick(text)}
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        <h5> {text}</h5>
      </button>
    </div>
  );
};

export default Button;
