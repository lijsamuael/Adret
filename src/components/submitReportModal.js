import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-80">
      <div className="relative w-[95%] sm:w-9/12 lg:w-7/12 2xl:w-6/12 mx-auto mt-24 overflow-hidden rounded-lg text-white bg-black  shadow-lg">
        <div className="flex flex-col space-y-8  py-8  px-4 ssm:px-[30px] sm:px-[40px]  lg:px-12 xl:px-[60px] 2xl:px-20 pt-[24px] w-full h-full rounded-lg">
          <h2 className=" font-bold  text-center font-sans   text-[24px] ssm:text-[32px]">
            Submit Report
          </h2>

          <div className="grid  gap-x-[14px] md:gap-x-[20px] px-[15px] py-[16px] sm:grid-cols-[150px_auto] grid-cols-[100px_auto] items-center pl-3 rounded-lg border-2 border-gray-500">
            <div className="left-image ">
              <img
                src="./images/profile.jpg"
                alt="report"
                className="rounded-lg aspect-h-4 aspect-w-3 object-cover "
              />
            </div>
            <div className=" flex flex-col  justify-evenly h-full">
              <h3 className="font-bold text-[18px] ssm:text-[24px]">
                Art Title
              </h3>
              <p className=" font-light text-[11px] ssm:text-[13px] h-16 text-ellipsis overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blaiis,
                asores repellat ratione nemo alflsdk flskd anebe adad beed leke
                lkeej Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blaiis, asores repellat ratione nemo alflsdk flskd anebe adad
                beed leke lkee
              </p>
              <div className="hidden sm:flex items-end gap-x-[10px]">
                <img
                  src="./images/profile.jpg"
                  alt="icon"
                  className=" rounded-lg profile-img max-h-[50px] aspect-square"
                />
                <div className="text-gray-500 align-bottom h-full  flex flex-col justify-center">
                  <h3 className="text-white font-normal text-lg ">
                    Artist Name
                  </h3>
                  <p className="text-[12px]">@john_doe</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 pt-[20px] items-center sm:hidden  col-span-2">
              <img
                src="./images/profile.jpg"
                alt="icon"
                className="rounded-lg profile-img object-cover h-12 aspect-square"
              />
              <div className="text-gray-500 w-full">
                <h3 className="text-lg text-white font-normal text-[16px] ssm:text-[18px]">
                  Artist Name
                </h3>
                <p className="text-[11px]">@john_doe</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-8">
            <div className="font-sans px-6  text-sm text-white bg-gray-700   h-10 rounded-[10px] justify-center items-center flex">
              Reporter
            </div>
            <div className=" flex  items-center px-2  text-sm text-white bg-gray-700 h-10 rounded-[10px] py-1 overflow-hidden gap-x-[10px]  sm:w-auto">
              <img
                src="./images/profile.jpg"
                alt="email"
                className=" aspect-sqaure h-full rounded-lg"
              />
              <span className=" align-middle">Email@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className=" font-semibold">Message</p>
            <textarea
              className="max-w-1200 h-64 px-3 py-4  rounded-md bg-gray-700 "
              rows="5"
              placeholder="Please give us a detail report on why reporting this art..."
            ></textarea>
          </div>

          <div
            className="flex space-x-8 justify-center ssm:justify-end"
          >
            <button
              className="w-32 py-2 font-semibold text-black bg-white rounded hover:bg-gray-200 focus:bg-gray-200"
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
