import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageHeadingContainer = ({ children }: Props) => {
  return (
    <>
      <div className="m-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </div>
    </>
  );
};

export default PageHeadingContainer;
