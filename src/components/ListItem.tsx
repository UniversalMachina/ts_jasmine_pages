import { FunctionComponent } from "react";

export type ListItemType = {
  subheadingOne?: string;
  text?: string;
};

const ListItem: FunctionComponent<ListItemType> = ({ subheadingOne, text }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px] text-left text-xl text-color-neutral-black font-text-medium-normal">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/icon--relume.svg"
      />
      <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
        {subheadingOne}
      </b>
      <div className="self-stretch relative text-base leading-[150%]">
        {text}
      </div>
    </div>
  );
};

export default ListItem;
