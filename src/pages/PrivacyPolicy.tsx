import { FunctionComponent } from "react";
import Header from "../components/WhyJasmine/Header";
import Content2 from "../components/Privacy/Content2";

const PrivacyPolicy: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start pt-0 px-0 pb-[0.3000000000029104px] box-border tracking-[normal]">
      <main className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-full">
        <Header
          tagline="Protect"
          shortHeadingHere="Your Privacy Matters"
          loremIpsumDolorSitAmetCon="We are committed to keeping your personal information safe and secure."
          button="Contact Us"
        />
        <section className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full mq450:gap-[20px_80px] mq725:gap-[40px_80px] mq725:py-[47px] mq725:px-8 mq725:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
          <Content2 />
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
