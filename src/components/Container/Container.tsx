import React from "react";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
	return (
		<div className={`mx-auto w-full px-4 sm:w-10/12 sm:px-0 ${className}`}>
			{children}
		</div>
	);
};

export default Container;
