import React from "react";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
	return <div className={`mx-auto w-10/12 ${className}`}>{children}</div>;
};

export default Container;
