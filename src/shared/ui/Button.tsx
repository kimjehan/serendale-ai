type Props = {
  children: React.ReactNode;
  border?: "solid" | "gradient";
};

export const Button = ({ children, border = "solid" }: Props) => {
  const isGradient = border === "gradient";

  return (
    <button
      className={`
        relative rounded-[100px] text-xl outline-none bg-black
        ${
          isGradient
            ? "p-0.5 bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)]"
            : "border-2 border-white px-8 py-5.5"
        }
      `}
    >
      <span
        className={`
          block rounded-[100px]
          ${isGradient ? "bg-black px-8 py-5.5" : ""}`}
      >
        {children}
      </span>
    </button>
  );
};
