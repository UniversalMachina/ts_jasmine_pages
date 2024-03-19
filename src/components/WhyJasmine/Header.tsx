import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type HeaderType = {
  tagline?: string;
  shortHeadingHere?: string;
  loremIpsumDolorSitAmetCon?: string;
  button?: string;

  /** Style props */
  shortHeadingHereWidth?: CSSProperties["width"];
  shortHeadingHereMinWidth?: CSSProperties["minWidth"];
  actionsTextAlign?: CSSProperties["textAlign"];
  stylePrimarySmallFalseDaTextAlign?: CSSProperties["textAlign"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Header: FunctionComponent<HeaderType> = ({
  tagline,
  shortHeadingHere,
  loremIpsumDolorSitAmetCon,
  button,
  shortHeadingHereWidth,
  shortHeadingHereMinWidth,
  actionsTextAlign,
  stylePrimarySmallFalseDaTextAlign,
  propMinWidth,
}) => {
  const taglineStyle: CSSProperties = useMemo(() => {
    return {
      width: shortHeadingHereWidth,
      minWidth: shortHeadingHereMinWidth,
    };
  }, [shortHeadingHereWidth, shortHeadingHereMinWidth]);

  const shortHeadingHereStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: actionsTextAlign,
    };
  }, [actionsTextAlign]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: stylePrimarySmallFalseDaTextAlign,
    };
  }, [stylePrimarySmallFalseDaTextAlign]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-5 box-border max-w-full text-center text-base text-color-neutral-black font-text-medium-normal mq450:gap-[20px_80px] mq725:pt-[73px] mq725:pb-[73px] mq725:box-border mq1000:gap-[40px_80px]">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <div
            className="w-[53px] relative leading-[150%] font-semibold inline-block min-w-[53px]"
            style={taglineStyle}
          >
            {tagline}
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-37xl">
            <h1
              className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-15xl mq450:leading-[40px] mq1000:text-26xl mq1000:leading-[54px]"
              style={shortHeadingHereStyle}
            >
              {shortHeadingHere}
            </h1>
            <div
              className="self-stretch relative text-lg leading-[150%]"
              style={loremIpsumDolorStyle}
            >
              {loremIpsumDolorSitAmetCon}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px]">
          <button className="cursor-pointer py-3 px-[23px] bg-color-neutral-black flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-background-color-primary text-left inline-block min-w-[81px]">
              Learn More
            </div>
          </button>
          <button className="cursor-pointer py-3 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div
              className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-black text-left inline-block min-w-[79px] whitespace-nowrap"
              style={buttonStyle}
            >
              {button}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
