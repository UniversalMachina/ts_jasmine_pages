import { FunctionComponent } from "react";
import Content from "./Content";

const Testimonial: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-[80px] max-w-full text-left text-29xl text-color-neutral-black font-text-medium-normal mq750:gap-[40px_80px] mq750:pl-8 mq750:pr-8 mq750:box-border mq450:gap-[20px_80px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
      <div className="w-[560px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
          Client Testimonials
        </h1>
        <div className="self-stretch relative text-lg leading-[150%]">
          Discover what industry experts and tech reviewers are saying about
          Jasmine.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-lg mq750:gap-[16px_32px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full shrink-0 mq750:gap-[16px]">
          <Content
            controlFlow="/vector.svg"
            quote="Jasmine is an incredible chatbot that has revolutionized the way we manage CRM and book clients."
            avatarImage="/avatar-image-1@2x.png"
            loopInit="John Doe"
            loopEnd="CEO, Tech Company"
          />
          <Content
            controlFlow="/vector.svg"
            quote="Using Jasmine has significantly improved our efficiency and customer satisfaction."
            avatarImage="/avatar-image-1@2x.png"
            loopInit="Jane Smith"
            loopEnd="Marketing Manager, Startup"
            propPadding="unset"
            propMinWidth="82px"
          />
          <Content
            controlFlow="/vector.svg"
            quote="Jasmine's AI capabilities have transformed our lead generation process."
            avatarImage="/avatar-image-1@2x.png"
            loopInit="David Johnson"
            loopEnd="Sales Director, Real Estate Agency"
            propPadding="unset"
            propMinWidth="107px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-black" />
              <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
              <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
              <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
              <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <button className="cursor-pointer py-3 px-[11px] bg-[transparent] h-12 w-12 rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-black">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
            </button>
            <button className="cursor-pointer py-3 px-[11px] bg-[transparent] h-12 w-12 rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-black">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
