import React from "react";
import pizza from "./../../../public/pizza.avif";
import experience from "./../../../public/experience.avif";
import questions from "./../../../public/question.avif";
import SectionHeaders from "../../components/layout/SectionHeaders";

const ContactPage = () => {
  return (
    <section className="mt-8 flex flex-col gap-8">
      <h1 className="text-center text-primary text-4xl my-2">Contact</h1>
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
      <div className="w-full bg-primary  p-4  rounded-xl flex flex-col items-center justify-center gap-4">
        <h1 className="text-white text-3xl  font-bold">Call Us</h1>
        <h2 className="text-gray-500 text-2xl">+46 738 123 123</h2>
      </div>
      <div className=" py-8 px-4 bg-secondary text-black rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          NEVER MISS OUT ON AMAZING DEALS AT ST PIZZA!
        </h2>
        <p className="text-lg text-center mb-6">
          SIGN UP FOR NEW PIZZABILITIES
        </p>
        <form className="space-y-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-black"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-black"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[+][0-9]{11}"
              title="Include country code, e.g. +12345678901"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col -mx-2 mb-4">
            <div className="w-full  px-2">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-black"
              >
                Birthday (MM/DD)
              </label>
              <input
                type="text"
                id="birthday"
                name="birthday"
                placeholder="MM/DD"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="w-full flex flex-col   px-2">
              <label
                htmlFor="homeStore"
                className="block text-sm font-medium text-black"
              >
                Home Store *
              </label>
              <select
                id="homeStore"
                name="homeStore"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Home Store</option>
                <option value="New York City, NY">New York City, NY</option>
                <option value="Los Angeles, CA">Los Angeles, CA</option>
                <option value="Chicago, IL">Chicago, IL</option>
                <option value="Houston, TX">Houston, TX</option>
                <option value="Miami, FL">Miami, FL</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="buffetFave"
              className="block text-sm font-medium text-black"
            >
              What's your fave?
            </label>
            <select
              id="buffetFave"
              name="buffetFave"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select your favorite</option>
              <option value="Pepperoni Pizza">Pepperoni Pizza</option>
              <option value="Cheese Pizza">Cheese Pizza</option>
              <option value="Hawaiian Pizza">Hawaiian Pizza</option>
              <option value="Veggie Delight Pizza">Veggie Pizza</option>
              <option value="Meat Lover's Pizza">BBQ Pizza</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="terms" className="inline-flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="form-checkbox text-blue-500 h-4 w-4"
                required
              />
              <span className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>
              </span>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-black rounded-full w-[50%] border-0 text-white hover:bg-white hover:text-primary">
              Submit
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          By submitting this form and signing up for texts, you consent to
          receive marketing text messages (e.g. promos) from Cicis at the number
          provided, including messages sent by autodialer. Consent is not a
          condition of purchase. Msg & data rates may apply. Msg frequency
          varies. Unsubscribe at any time by replying STOP.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
