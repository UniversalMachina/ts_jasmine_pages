import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContentType = {
  controlFlow?: string;
  quote?: string;
  avatarImage?: string;
  loopInit?: string;
  loopEnd?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Content: FunctionComponent<ContentType> = ({
  controlFlow,
  quote,
  avatarImage,
  loopInit,
  loopEnd,
  propPadding,
  propMinWidth,
}) => {
  const avatarStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const loopInitStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 box-border flex flex-col items-start justify-start py-8 px-[31px] gap-[24px] min-w-[312px] max-w-full text-left text-lg text-color-neutral-black font-text-medium-normal border-[1px] border-solid border-color-neutral-black">
      <div className="h-[18.9px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[4px]">
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
          src={controlFlow}
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative leading-[150%]">{quote}</div>
        <div
          className="h-14 flex flex-row items-center justify-start gap-[20px] text-base"
          style={avatarStyle}
        >
          <img
            className="h-14 w-14 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={avatarImage}
          />
          <div className="flex flex-col items-start justify-start">
            <div
              className="relative leading-[150%] font-semibold inline-block min-w-[68px]"
              style={loopInitStyle}
            >
              {loopInit}
            </div>
            <div className="relative leading-[150%]">{loopEnd}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
