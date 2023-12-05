import { ReactNode, useState } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  bottom?: string;
  width: number;
  text: string;
}

const Tooltip = ({ className, children, bottom, width: tooltipWidth, text }: Props) => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <div className={`${className ? className : "relative"}`}>
      <div onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
        {children}
      </div>
      <div
        className={`${
          isMouseHover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        } text-center absolute left-1/2 -translate-x-1/2 p-2 bg-zinc-800 text-white text-sm rounded-sm shadow-lg duration-300 ease-in-out`}
        style={{ bottom: bottom ?? "20px", width: text.length * tooltipWidth }}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
