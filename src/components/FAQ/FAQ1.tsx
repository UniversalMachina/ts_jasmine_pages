import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FAQ1Type = {
  text?: string;
  question?: string;
  text1?: string;
  question1?: string;
  text2?: string;
  question2?: string;
  text3?: string;
  question3?: string;
  text4?: string;
  question4?: string;
  text5?: string;
  text6?: string;

  /** Style props */
  questionPadding?: CSSProperties["padding"];
  textPadding?: CSSProperties["padding"];
  textPadding1?: CSSProperties["padding"];
  headingPadding?: CSSProperties["padding"];
  buttonPadding?: CSSProperties["padding"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const FAQ1: FunctionComponent<FAQ1Type> = ({
  text,
  question,
  text1,
  question1,
  text2,
  question2,
  text3,
  question3,
  text4,
  question4,
  text5,
  text6,
  questionPadding,
  textPadding,
  textPadding1,
  headingPadding,
  buttonPadding,
  propPadding,
  propPadding1,
}) => {
  const listStyle: CSSProperties = useMemo(() => {
    return {
      padding: questionPadding,
    };
  }, [questionPadding]);

  const listItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: textPadding,
    };
  }, [textPadding]);

  const listItem1Style: CSSProperties = useMemo(() => {
    return {
      padding: textPadding1,
    };
  }, [textPadding1]);

  const listItem2Style: CSSProperties = useMemo(() => {
    return {
      padding: headingPadding,
    };
  }, [headingPadding]);

  const listItem3Style: CSSProperties = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const content1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-5 box-border max-w-full text-center text-29xl text-color-neutral-black font-text-medium-normal lg:pt-[73px] lg:pb-[73px] lg:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px] mq750:pt-[47px] mq750:pb-[47px] mq750:box-border">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[80px] max-w-full mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            FAQs
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            {text}
          </div>
        </div>
        <div
          className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[48px] text-left text-lg mq450:gap-[24px_48px]"
          style={listStyle}
        >
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[16px]"
            style={listItemStyle}
          >
            <b className="self-stretch relative leading-[150%]">{question}</b>
            <div className="self-stretch relative text-base leading-[150%]">
              {text1}
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[16px]"
            style={listItem1Style}
          >
            <b className="self-stretch relative leading-[150%]">{question1}</b>
            <div className="self-stretch relative text-base leading-[150%]">
              {text2}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <b className="self-stretch relative leading-[150%]">{question2}</b>
            <div className="self-stretch relative text-base leading-[150%]">
              {text3}
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[16px]"
            style={listItem2Style}
          >
            <b className="self-stretch relative leading-[150%]">{question3}</b>
            <div className="self-stretch relative text-base leading-[150%]">
              {text4}
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[16px]"
            style={listItem3Style}
          >
            <b className="self-stretch relative leading-[150%]">{question4}</b>
            <div className="self-stretch relative text-base leading-[150%]">
              {text5}
            </div>
          </div>
        </div>
        <div
          className="w-[560px] flex flex-col items-center justify-start gap-[24px] max-w-full text-13xl"
          style={contentStyle}
        >
          <div
            className="self-stretch flex flex-col items-center justify-start gap-[16px] shrink-0"
            style={content1Style}
          >
            <h2 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
              Still have questions?
            </h2>
            <div className="self-stretch relative text-lg leading-[150%]">
              {text6}
            </div>
          </div>
          <button className="cursor-pointer py-3 px-6 bg-[transparent] h-[50px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-black text-left inline-block min-w-[56px]">
              Contact
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ1;
