import { FunctionComponent } from "react";
import Header from "../components/WhyJasmine/Header";
import Layout4 from "../components/WhyJasmine/Layout4";
import Layout3 from "../components/WhyJasmine/Layout3";
import Layout2 from "../components/WhyJasmine/Layout2";
import Layout1 from "../components/WhyJasmine/Layout1";
import Layout from "../components/WhyJasmine/Layout";
import Testimonial1 from "../components/WhyJasmine/Testimonial1";
import Testimonial from "../components/WhyJasmine/Testimonial";
import CTA from "../components/WhyJasmine/CTA";
import FAQ1 from "../components/FAQ/FAQ1";

const WhyJasmine: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-[542.0000000000146px] box-border tracking-[normal]">
      <Header
        tagline="Efficiency"
        shortHeadingHere="Streamline Your Workflow"
        loremIpsumDolorSitAmetCon="Jasmine is the AI chatbot designed to revolutionize CRM and client booking for real estate agents."
        button="Sign Up"
        shortHeadingHereWidth="70px"
        shortHeadingHereMinWidth="70px"
        actionsTextAlign="left"
        stylePrimarySmallFalseDaTextAlign="left"
        propMinWidth="55px"
      />
      <Layout4 />
      <Layout3 />
      <Layout2 />
      <Layout1 />
      <Layout />
      <Testimonial1 />
      <Testimonial />
      <CTA />
      <FAQ1
        text="Find answers to common questions about choosing Jasmine as your CRM chatbot solution."
        question="Why choose Jasmine?"
        text1="Jasmine stands out from other chatbots and CRM solutions with its advanced AI capabilities, seamless integration with your existing systems, and user-friendly interface. It provides a comprehensive solution for managing your CRM and booking clients, streamlining your workflow and saving you time and effort."
        question1="How does it work?"
        text2="Jasmine utilizes cutting-edge AI technology to understand and respond to customer inquiries, manage your CRM data, and schedule appointments with clients. It integrates with popular CRM platforms and can be customized to fit your specific business needs."
        question2="Is it easy to use?"
        text3="Absolutely! Jasmine is designed with user-friendliness in mind. Its intuitive interface makes it easy for real estate agents to navigate and utilize its features without any technical expertise. Plus, our support team is always available to assist you with any questions or issues you may encounter."
        question3="Can it integrate with my existing systems?"
        text4="Yes, Jasmine seamlessly integrates with popular CRM platforms, allowing you to sync your customer data, appointments, and interactions. This ensures that you have a centralized and up-to-date view of your clients and can easily manage your business processes."
        question4="Is my data secure?"
        text5="Absolutely. We prioritize the security and privacy of your data. Jasmine employs advanced encryption and follows industry best practices to ensure that your information is protected. Additionally, we regularly update our security measures to stay ahead of potential threats."
        text6="Contact us for more information."
        questionPadding="unset"
        textPadding="unset"
        textPadding1="unset"
        headingPadding="unset"
        buttonPadding="unset"
        propPadding="unset"
        propPadding1="unset"
      />
    </div>
  );
};

export default WhyJasmine;
