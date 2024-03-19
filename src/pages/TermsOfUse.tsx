import { FunctionComponent } from "react";
import Content1 from "../components/TermsofUse/Content1";

const TermsOfUse: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start tracking-[normal]">
      <main className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border bg-[url('/public/header--54@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-37xl text-background-color-primary font-text-medium-normal mq450:gap-[20px_80px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq1025:gap-[40px_80px] mq1025:pl-8 mq1025:pr-8 mq1025:box-border">
          <div className="w-[768px] flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-15xl mq450:leading-[40px] mq1025:text-26xl mq1025:leading-[54px]">
              Terms of Use
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Please read and understand the conditions before using our
              website.
            </div>
          </div>
        </section>
        <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full mq750:gap-[40px_80px] mq750:py-[47px] mq750:px-8 mq750:box-border mq450:gap-[20px_80px] mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border">
          <Content1 />
        </section>
      </main>
    </div>
  );
};

export default TermsOfUse;
