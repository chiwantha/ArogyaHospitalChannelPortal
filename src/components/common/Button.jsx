const Button = ({ title, onClick, bg, pd }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        bg ? bg : "bg-[#0460D9]  hover:bg-[#044ba8] text-white"
      } rounded-lg ${pd ? pd : ` px-3 py-1`} transition-colors duration-300`}
    >
      <span className="font-bold">{title ? title : "Button"}</span>
    </div>
  );
};

export default Button;
