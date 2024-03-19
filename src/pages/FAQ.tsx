import { FunctionComponent } from "react";
import FAQ1 from "../components/FAQ/FAQ1";
import FAQ from "../components/FAQ/FAQ";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start tracking-[normal]">
      <main className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-full">
        <header className="self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-left text-37xl text-color-neutral-black font-text-medium-normal mq450:gap-[20px_80px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq750:gap-[40px_80px] mq750:pl-8 mq750:pr-8 mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full mq450:gap-[80px_20px] mq750:gap-[80px_40px]">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start max-w-full text-lg">
              <div className="self-stretch relative leading-[150%]">
                Find answers to common questions about our AI chat bot for real
                estate agents.
              </div>
            </div>
          </div>
        </header>
        <FAQ1
          text="Find answers to common questions about customizing our chatbot to fit your needs and branding."
          question="How can I customize the chatbot?"
          text1="Our chatbot comes with a user-friendly interface that allows you to easily customize its appearance, behavior, and responses to match your branding and meet your specific requirements. You can personalize the chatbot's language, add your own FAQs, and even integrate it with your CRM system for seamless customer management."
          question1="Can I add my own FAQs?"
          text2="Absolutely! Our chatbot provides a simple interface for you to add, edit, and remove FAQs as needed. You can create a comprehensive knowledge base that addresses your clients' most common questions and concerns, saving you time and providing instant support."
          question2="Is the chatbot customizable?"
          text3="Yes, our chatbot is highly customizable. You can choose from a range of pre-designed templates or create your own unique chatbot design. Additionally, you can customize the chatbot's conversation flow, add custom responses, and integrate it with other tools and platforms to enhance its functionality."
          question3="How does CRM integration work?"
          text4="Our chatbot seamlessly integrates with popular CRM systems, allowing you to automatically capture and manage leads, schedule appointments, and track customer interactions. By connecting the chatbot with your CRM, you can streamline your workflow, improve customer service, and maximize your efficiency as a real estate agent."
          question4="Can I get support?"
          text5="Of course! We offer comprehensive support to assist you with any questions or issues you may have. Our dedicated support team is available to provide guidance, troubleshoot problems, and ensure that you get the most out of our chatbot solution."
          text6="Contact us for further assistance."
        />
        <FAQ />
      </main>
    </div>
  );
};

export default Frame;
