import { FunctionComponent } from "react";
import ListItem from "../ListItem";
import Actions from "./Actions";

const Layout1: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-color-neutral-black font-text-medium-normal mq750:gap-[40px_80px] mq750:pl-8 mq750:pr-8 mq750:box-border mq450:gap-[20px_80px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq750:gap-[40px] mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[400px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px_32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[71px] relative leading-[150%] font-semibold inline-block min-w-[71px]">
                Efficiency
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
                  Streamline Your Real Estate Business with Jasmine
                </h1>
                <div className="self-stretch relative text-lg leading-[150%]">
                  Jasmine is an AI chatbot designed to revolutionize your real
                  estate business. With Jasmine, you can automate your CRM
                  management and effortlessly book clients, saving you time and
                  increasing your efficiency.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[24px] text-left text-xl mq750:flex-wrap">
              <ListItem
                subheadingOne="Enhanced Efficiency"
                text="Automate your CRM management, book clients, and streamline your real estate business with Jasmine."
              />
              <ListItem
                subheadingOne="Improved Engagement"
                text="Engage with your clients like never before and provide personalized experiences with Jasmine."
              />
            </div>
          </div>
          <Actions propPadding="0" />
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

export default Layout1;
