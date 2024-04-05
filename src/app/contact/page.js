import React from "react";
import pizza from "./../../../public/pizza.png";
import experience from "./../../../public/experience.avif";
import questions from "./../../../public/question.avif";

const ContactPage = () => {
  return (
    <section className="mt-8 flex flex-col gap-8">
      <div className="bg-primary w-full p-4 flex  relative overflow-hidden rounded-xl">
        <div className="flex flex-col flex-1   items-center justify-center gap-4">
          <h1 className="text-white text-3xl font-bold text-center">
            QUESTIONS & FEEDBACK
          </h1>
          <p className="text-white text-center text-md">
            Craving info? Start with our online resources! Find restaurant info,
            leave a review, or reach out here.
          </p>
        </div>
        <div className="h-[300px] flex-1  hidden sm:block">
          <img
            src={pizza.src}
            alt="pizza image"
            className=" absolute w-[300px] h-[300px] top-[-50%] right-[12%]"
          ></img>
          <img
            src={pizza.src}
            alt="pizza image"
            className=" absolute w-[300px] h-[300px] top-[50%] right-[2%]"
          ></img>
        </div>
      </div>
      <div className="bg-secondary p-6 rounded-xl">
        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-primary text-3xl text-center font-bold">
            HAVE QUESTIONS OR FEEDBACK? WE'RE ALL EARS.
          </h1>
          <p className="text-lg text-center">
            Get answers to your top questions, contact us directly, or tell us
            about your experience at St Pizza.
          </p>
        </div>
        <div className="flex gap-4 mt-10 flex-col sm:flex-row">
          <div className=" flex-1  border-0 bg-white rounded-3xl p-4 flex flex-col items-center justify-between gap-4">
            <img src={questions.src} className="rounded-3xl h-[60%]"></img>
            <h1 className="text-primary text-lg font-bold">
              WHAT'S YOUR QUESTION?
            </h1>
            <p>
              Need more info about our menu and restaurants? Find answers to
              frequently asked questions or get in contact with our team.
            </p>
            <button className="w-[60%] bg-primary text-white border-white hover:underline cursor-pointer">
              ASK US Here
            </button>
          </div>
          <div className="bg-white flex-1 border-0 rounded-3xl p-4 flex items-center flex-col justify-between gap-4">
            <img src={experience.src} className="rounded-3xl h-[60%]"></img>
            <h1 className="text-primary text-lg font-bold">
              HOW WAS YOUR EXPERIENCE?
            </h1>
            <p>
              Your feedback unlocks better pizza possibilities. Share your
              experience at St Pizza.
            </p>
            <button className="w-[60%] bg-primary text-white border-white hover:underline cursor-pointer">
              GIVE US FEEDBACK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
