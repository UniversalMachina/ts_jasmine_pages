import { FunctionComponent } from "react";

export type ColumnType = {
  placeholderImage?: string;
  heading?: string;
  text?: string;
};

const Column: FunctionComponent<ColumnType> = ({
  placeholderImage,
  heading,
  text,
}) => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[32px] min-w-[304px] max-w-full text-center text-13xl text-color-neutral-black font-text-medium-normal mq450:gap-[16px_32px]">
      <img
        className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={placeholderImage}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
          {heading}
        </h1>
        <div className="self-stretch relative text-base leading-[150%]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Column;
