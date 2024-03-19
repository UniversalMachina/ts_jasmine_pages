import { FunctionComponent } from "react";

const Layout4: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-left text-21xl text-color-neutral-black font-text-medium-normal mq750:gap-[40px_80px] mq750:pl-8 mq750:pr-8 mq750:box-border mq450:gap-[20px_80px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq750:gap-[40px] mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[32px] min-w-[400px] max-w-full mq750:gap-[16px_32px] mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
              The Evolution of 'Jasmine': An AI Chatbot Revolutionizing Real
              Estate CRM
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Discover the story behind 'Jasmine', an innovative AI chatbot
              designed specifically for the real estate industry. Developed with
              cutting-edge technology, Jasmine streamlines CRM management and
              automates client booking, empowering real estate agents to focus
              on what they do best.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 box-border gap-[16px] max-w-full text-base">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                Tailored for Real Estate Agents' Unique Needs
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                Efficient CRM Management and Client Booking Automation
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                Maximize Productivity and Close More Deals with Jasmine
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/placeholder-image@2x.png"
        />
      </div>
    </section>
  );
};

export default Layout4;
