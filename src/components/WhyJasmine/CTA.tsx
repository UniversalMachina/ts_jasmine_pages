import { FunctionComponent } from "react";

const CTA: FunctionComponent = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border bg-[url('/public/cta--3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-29xl text-background-color-primary font-text-medium-normal mq450:gap-[20px_80px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq1050:gap-[40px_80px] mq1050:pl-8 mq1050:pr-8 mq1050:box-border">
      <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Experience the Power of Jasmine
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Streamline your CRM and Book More Clients with Jasmine, the AI
            Chatbot
          </div>
        </div>
        <div className="w-[178px] flex flex-row items-start justify-start pt-4 px-0 pb-0 box-border gap-[16px]">
          <button className="cursor-pointer py-3 px-[23px] bg-color-neutral-black w-[71px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-background-color-primary text-left inline-block min-w-[23px]">
              Try
            </div>
          </button>
          <button className="cursor-pointer py-3 px-[23px] bg-[transparent] flex-1 flex flex-row items-center justify-center border-[1px] border-solid border-background-color-primary hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-background-color-primary text-left inline-block min-w-[43px]">
              Demo
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
