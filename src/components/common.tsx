import { HTMLAttributes, ReactNode } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const Flex = ({ children, className, ...rest }: FlexProps) => {
  return (
    <div className={`flex items-center select-none ${className ?? ""}`} {...rest}>
      {children ?? ""}
    </div>
  );
};

export const Text = ({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => {
  return (
    <span onClick={onClick} className={`select-none ${className ?? ""}`}>
      {children}
    </span>
  );
};
