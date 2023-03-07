import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-80">
      <div className="relative w-10/12 md:w-6/12 mx-auto mt-24 mb-4 overflow-hidden rounded-lg text-white bg-black rounded shadow-lg">
        <div className="px-16 pt-4 mb-8 w-full h-full rounded-lg">
          <h2 className="text-lg font-semibold mb-8 text-center">
            Submit Report
          </h2>

          <div className="flex flex-col md:flex-row items-center px-3 rounded-lg border-2 border-gray-500">
            <div className="py-4">
              <img
                src="./images/reportlogo.jpg"
                alt="report"
                className="rounded-lg object-cover md:h-36 md:w-32 w-full"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-lg font-semibold mb-2">Art Title</h3>
              <p className=" mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, asperiores repellat ratione nemo
              </p>
              <div className="flex ">
                <img
                  src="./images/profile.jpg"
                  width="50"
                  height="50"
                  alt="icon"
                  className="mr-2 rounded-lg"
                />
                <div className="text-sm text-gray-500">
                  <h3 className="text-lg text-white font-semibold">
                    Artist Name
                  </h3>
                  <p>@john_doe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start mt-12 ">
            <button className="px-6 mb-6 h-8 font-semibold text-white bg-gray-700 rounded hover:bg-gray-500 mr-5">
              Reporter
            </button>
            <button className="mb-6  flex fled-nowrap px-2  h-8 font-semibold text-white bg-gray-700 rounded hover:bg-gray-500">
              <img
                src="./images/profile.jpg"
                alt="email"
                className="mr-2 inline-block h-8 w-8 rounded-lg"
              />
              example@gmail.com
            </button>
          </div>
          <p className=" pb-4 font-semibold">Message</p>
          <textarea
            className="w-full h-64 px-3 py-2 mb-6 rounded-md bg-gray-700 "
            rows="5"
            placeholder="Please give us a detail report on why reporting this art..."
          ></textarea>

          <div className="flex justify-end">
            <button
              className="w-32 py-2 mr-5 font-semibold text-black bg-white rounded hover:bg-gray-200 focus:bg-gray-200"
              onClick={onClose}
            >
              Back
            </button>
            <button className="w-32 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:bg-orange-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
