import React from "react";


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-80">
      <div className="relative w-[95%] sm:w-9/12 lg:w-7/12 mx-auto mt-24 mb-4 overflow-hidden rounded-lg text-white bg-black  shadow-lg">
        <div className="px-4  lg:px-8 xl:px-20 pt-4 mb-8 w-full h-full rounded-lg">
          <h2
            className=" font-bold mb-8 text-center font-sans text-xl text-[32px]"
          >
            Submit Report
          </h2>

          <div className="grid sm:grid-cols-[150px_auto] grid-cols-[100px_auto] items-center pl-3 rounded-lg border-2 border-gray-500">
            <div className="left-image py-4 ">
              <img
                src="./images/profile.jpg"
                alt="report"
                className="rounded-lg aspect-h-4 aspect-w-3 object-cover "
              />
            </div>
            <div className=" ml-4  py-4 flex flex-col justify-evenly h-full">
              {/* <div className="h-1/2 bg-slate-400">
                
              </div> */}
              <h3 className="font-semibold " style={{ fontSize: 22 }}>
                Art Title
              </h3>
              <p
                className="mb-2 font-light text-[12px]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, asperiores repellat ratione nemo aldskjflsdk flskd
              </p>
              <div className="hidden sm:flex items-end">
                <img
                  src="./images/profile.jpg"
                  alt="icon"
                  className="mr-2 rounded-lg profile-img max-h-[50px]"
                />
                <div className="text-gray-500 align-bottom h-full flex flex-col justify-center">
                  <h3
                    className="text-white font-normal text-lg"
                  >
                    Artist Name
                  </h3>
                  <p
                    className="text-[12px]"
                  >
                    @john_doe
                  </p>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden  col-span-2 pb-2">
              <img
                src="./images/profile.jpg"
                alt="icon"
                className="mr-2 rounded-lg profile-img object-cover h-10 w-10"
              />
              <div className="text-gray-500 w-full">
                <h3 className="text-lg text-white font-normal">
                  Artist Name
                </h3>
                <p className="text-[12px]">@john_doe</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start mt-[36px] gap-5">
            <div
              className="font-sans px-6  text-sm text-white bg-gray-700   h-10 rounded-[10px] justify-center items-center flex"
            >
              Reporter
            </div>
            <div
              className=" flex  items-center px-2  text-sm text-white bg-gray-700 h-10 rounded-[10px] py-1 overflow-hidden gap-x-[10px] w-full sm:w-auto"
            >
              <img
                src="./images/profile.jpg"
                alt="email"
                className="inline-block aspect-h-5  aspect-w-5 h-full rounded-lg"
              />
              <span className="inline-block align-middle">
                Email@gmail.com
              </span>
            </div>
          </div>
          <p className=" font-semibold" style={{ marginTop: 36 }}>
            Message
          </p>
          <textarea
            className="w-full h-64 px-3  rounded-md bg-gray-700 "
            rows="5"
            placeholder="Please give us a detail report on why reporting this art..."
            style={{ marginTop: 18 }}
          ></textarea>

          <div className="flex justify-center sm:justify-end" style={{ marginTop: 34 }}>
            <button
              className="w-32 py-2 mr-5 font-semibold text-black bg-white rounded hover:bg-gray-200 focus:bg-gray-200"
              onClick={onClose}
            >
              Cancel
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
