import { FunctionComponent } from "react";

const Testimonial1: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-row items-start justify-center py-28 px-5 box-border max-w-full text-center text-5xl text-color-neutral-black font-text-medium-normal mq450:gap-[80px_20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq1050:gap-[80px_40px]">
      <div className="w-[768px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px_32px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 shrink-0">
          <div className="h-[18.9px] overflow-hidden flex flex-row items-start justify-start gap-[4px]">
            <img
              className="h-[18.9px] w-5 relative min-h-[19px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-[18.9px] w-5 relative min-h-[19px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-[18.9px] w-5 relative min-h-[19px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-[18.9px] w-5 relative min-h-[19px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-[18.9px] w-5 relative min-h-[19px]"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit shrink-0 mq450:text-lgi mq450:leading-[27px]">
          Implementing 'Jasmine' has greatly improved my workflow and client
          relationships. It's an invaluable tool for real estate professionals.
        </h3>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-base">
          <div className="w-[382px] flex flex-row flex-wrap items-start justify-center gap-[19.666666666666668px] max-w-full">
            <div className="h-[58.5px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border">
              <img
                className="w-14 h-14 relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/avatar-image@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 shrink-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold inline-block min-w-[68px]">
                  John Doe
                </div>
                <div className="relative leading-[150%] inline-block min-w-[126px]">
                  Real Estate Agent
                </div>
              </div>
            </div>
            <div className="h-[62px] w-px relative box-border border-r-[1px] border-solid border-color-neutral-black mq450:w-full mq450:h-px" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[91px] shrink-0">
              <img
                className="self-stretch h-14 relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/logo2-colordark.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
