import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ActionsType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Actions: FunctionComponent<ActionsType> = ({ propPadding }) => {
  const styleLinkSmallFalseDarkStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0 gap-[24px]">
      <button className="cursor-pointer py-3 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-black text-left inline-block min-w-[81px] whitespace-nowrap">
          Learn More
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 flex flex-row items-center justify-center gap-[8px]"
        style={styleLinkSmallFalseDarkStyle}
      >
        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-black text-left inline-block min-w-[55px] whitespace-nowrap">
          Sign Up
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--chevronright.svg"
        />
      </button>
    </div>
  );
};

export default Actions;
