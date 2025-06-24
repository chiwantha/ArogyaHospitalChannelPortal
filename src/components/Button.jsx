const Button = ({ title, onClick, bg }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        bg ? bg : "bg-[#0460D9] py-1 hover:bg-[#044ba8] text-white"
      } rounded-lg px-3 `}
    >
      <span className="font-bold">{title ? title : "Button"}</span>
    </div>
  );
};

export default Button;
