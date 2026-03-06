type Props = {
  children: React.ReactNode;
  border?: "solid" | "gradient";
};

export const Button = ({ children, border = "solid" }: Props) => {
  const isGradient = border === "gradient";

  return (
    <button
      className={`
        hover:scale-105 transition-all duration-300 relative rounded-[100px] sm:text-xl text-base outline-none bg-black cursor-pointer
        ${
          isGradient
            ? "p-0.5 bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)]"
            : "border-2 border-white sm:px-8 sm:py-5.5 px-4 py-2"
        }
      `}
    >
      <span
        className={`
          block rounded-[100px]
          ${isGradient ? "bg-black sm:px-8 sm:py-5.5 px-4 py-2" : ""}`}
      >
        {children}
      </span>
    </button>
  );
};
