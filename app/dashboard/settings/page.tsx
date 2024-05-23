import PageDescription from "@/app/components/PageDescription";
import PageHeader from "@/app/components/PageHeader";
import PageHeadingContainer from "@/app/components/PageHeadingContainer";
import React from "react";

const SettingPage = () => {
  return (
    <>
      <PageHeadingContainer>
        <PageHeader>Setting</PageHeader>
        <PageDescription>This is the setting page.</PageDescription>
      </PageHeadingContainer>
      <p className="fixed mt-10 flex w-1/2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        This is the leaf segment of the&nbsp;example.com/dashboard/
        <span className="font-bold text-blue-600">settings</span>
      </p>
    </>
  );
};

export default SettingPage;
