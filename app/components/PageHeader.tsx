import React from "react";

interface Props {
  children: string;
}

const PageHeader = ({ children }: Props) => {
  return (
    <h2 className="mb-3 text-2xl font-semibold">
      {children}{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
  );
};

export default PageHeader;
