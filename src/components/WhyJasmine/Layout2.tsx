import { FunctionComponent } from "react";
import Actions from "./Actions";

const Layout2: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-color-neutral-black font-text-medium-normal mq750:gap-[40px_80px] mq750:pl-8 mq750:pr-8 mq750:box-border mq450:gap-[20px_80px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq750:gap-[40px] mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[400px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px_32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[60px] relative leading-[150%] font-semibold inline-block min-w-[60px]">
                Efficient
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
                  User-Friendly Interface for Real Estate Agents
                </h1>
                <div className="self-stretch relative text-lg leading-[150%]">
                  Jasmine provides a user-friendly interface that allows real
                  estate agents to easily navigate and manage their CRM.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[24px] text-left text-xl mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px]">
                <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                  Easy CRM
                </b>
                <div className="self-stretch relative text-base leading-[150%]">
                  Effortlessly manage clients, bookings, and CRM data with
                  Jasmine's intuitive interface.
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px]">
                <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                  Streamlined Workflow
                </b>
                <div className="self-stretch relative text-base leading-[150%]">
                  Optimize your workflow with Jasmine's seamless integration of
                  CRM management and client booking.
                </div>
              </div>
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

export default Layout2;
