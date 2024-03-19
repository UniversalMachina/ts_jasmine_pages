import { FunctionComponent } from "react";
import Column from "./Column";
import Actions from "./Actions";

const Layout: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full text-center text-base text-color-neutral-black font-text-medium-normal lg:pt-[73px] lg:pb-[73px] lg:box-border mq750:gap-[40px_80px] mq750:py-[47px] mq750:px-8 mq750:box-border mq450:gap-[20px_80px]">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[16px] max-w-full">
        <div className="w-[71px] relative leading-[150%] font-semibold inline-block min-w-[71px]">
          Efficiency
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Streamline your CRM and automate client bookings
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Jasmine seamlessly integrates with your existing CRM system,
            eliminating the need for manual data entry. With its advanced AI
            capabilities, it automates the process of booking and managing
            client appointments, saving you time and effort.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[48px] max-w-full text-13xl mq750:gap-[24px_48px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[48px] max-w-full mq750:gap-[24px]">
          <Column
            placeholderImage="/placeholder-image-4@2x.png"
            heading="Easy Integration"
            text="Jasmine integrates smoothly with your CRM system, ensuring a hassle-free setup process."
          />
          <Column
            placeholderImage="/placeholder-image-5@2x.png"
            heading="Automated Booking"
            text="Let Jasmine handle the task of scheduling appointments with clients, freeing up your time for more important tasks."
          />
          <Column
            placeholderImage="/placeholder-image-6@2x.png"
            heading="Effortless Management"
            text="With Jasmine, you can easily manage and track client appointments, ensuring a smooth and organized workflow."
          />
        </div>
        <Actions propPadding="0" />
      </div>
    </section>
  );
};

export default Layout;
