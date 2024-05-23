import React from "react";

interface Props {
  children: string;
}

const PageDescription = ({ children }: Props) => {
  return <p className="m-0 max-w-[30ch] text-sm opacity-50">{children}</p>;
};

export default PageDescription;
