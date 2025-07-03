import React from "react";

export interface ContainerProps {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
  className = "",
}) => {
  return <div className={`container mx-auto px-4 py-4 ${className}`}>{children}</div>;
};

export default Container;
