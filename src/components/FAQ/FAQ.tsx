import { FunctionComponent } from "react";

const FAQ: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-5 box-border max-w-full text-center text-29xl text-color-neutral-black font-text-medium-normal lg:pt-[73px] lg:pb-[73px] lg:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px] mq750:pt-[47px] mq750:pb-[47px] mq750:box-border">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[80px] max-w-full mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Scalability
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Our AI chatbot service is designed to scale with your growing real
            estate business, providing seamless customer relationship management
            and booking solutions.
          </div>
        </div>
        <div className="w-[768px] overflow-x-auto flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-lg">
          <div className="w-[768px] box-border flex flex-row items-center justify-center py-5 px-[23px] border-[1px] border-solid border-color-neutral-black">
            <b className="flex-1 relative leading-[150%] inline-block max-w-full">
              How scalable is the service?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="w-[768px] box-border flex flex-row items-center justify-center py-5 px-[23px] border-[1px] border-solid border-color-neutral-black">
            <b className="flex-1 relative leading-[150%] inline-block max-w-full">
              What are the benefits?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="w-[768px] box-border flex flex-row items-center justify-center py-5 px-[23px] border-[1px] border-solid border-color-neutral-black">
            <b className="flex-1 relative leading-[150%] inline-block max-w-full">
              How can it help?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="w-[768px] box-border flex flex-row items-center justify-center py-5 px-[23px] border-[1px] border-solid border-color-neutral-black">
            <b className="flex-1 relative leading-[150%] inline-block max-w-full">
              Is it customizable?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="w-[768px] box-border flex flex-row items-center justify-center py-5 px-[23px] border-[1px] border-solid border-color-neutral-black">
            <b className="flex-1 relative leading-[150%] inline-block max-w-full">
              How can I get started?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
        <div className="w-[560px] flex flex-col items-center justify-start gap-[24px] max-w-full text-13xl">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] shrink-0">
            <h2 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
              Contact Us
            </h2>
            <div className="self-stretch relative text-lg leading-[150%]">
              Still have questions? Get in touch with our team.
            </div>
          </div>
          <button className="cursor-pointer py-3 px-6 bg-[transparent] h-[50px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-black text-left inline-block min-w-[56px]">
              Contact
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
