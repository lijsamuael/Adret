import React from "react";


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-80">
      <div className="relative w-full lg:w-7/12 mx-auto mt-24 mb-4 overflow-hidden rounded-lg text-white bg-black rounded shadow-lg">
        <div className="px-5 sm:px-10 md:px-20 pt-4 mb-8 w-full h-full rounded-lg">
          <h2
            className="text-lg font-bold mb-8 text-center font-sans text-xl"
            style={{ fontSize: 32 }}
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
            <div className=" ml-4  py-4 grid grid-cols-2 ">
              <div className="col-span-12">
                <h3 className="font-bold mb-2" style={{ fontSize: 22 }}>
                  Art Title
                </h3>
                <p
                  className="mb-2 font-light"
                  style={{ WebkitTextSizeAdjust: "auto", whiteSpace: 'pre-line', fontStretch: 'ultra-condensed' }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, asperiores repellat ratione nemo aldskjflsdk flskd
                </p>
              </div>
              <div className="col-span-5  inset-x-0 bottom-0 hidden sm:flex flex col-span-2 pb-2  ">
                <img
                  src="./images/profile.jpg"
                  alt="icon"
                  className="mr-2 rounded-lg profile-img"
                  style={{maxHeight: 60,}}
                />
                <div className="text-gray-500 align-bottom">
                  <h3
                    className="text-white font-medium"
                    style={{ fontSize: 20 }}
                  >
                    Artist Name
                  </h3>
                  <p
                    className="text-base text-xl text-sm"
                    style={{ fontSize: 13 }}
                  >
                    @john_doe
                  </p>
                </div>
              </div>
            </div>
            <div className="block sm:hidden flex col-span-2 pb-2">
              <img
                src="./images/profile.jpg"
                alt="icon"
                className="mr-2  rounded-lg profile-img object-cover h-12 w-12"
              />
              <div className="text-sm text-gray-500 w-full">
                <h3 className="text-lg text-white font-semibold">
                  Artist Name
                </h3>
                <p className="text-base text-xl text-sm">@john_doe</p>
              </div>
            </div>
          </div>

          <div className="flex flex-nowrap items-center justify-start">
            <button
              className="font-sans px-6 h-8 text-sm text-white bg-gray-700 rounded hover:bg-gray-500 mr-5"
              style={{ height: 40, borderRadius: 10, marginTop: 36 }}
            >
              Reporter
            </button>
            <button
              className=" flex flex-wrap items-center px-2  text-sm text-white bg-gray-700 rounded hover:bg-gray-500"
              style={{ height: 40, borderRadius: 10, marginTop: 36 }}
            >
              <img
                src="./images/profile.jpg"
                alt="email"
                className="inline-block aspect-h-4  aspect-w-3 h-10 "
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: 15,
                }}
              />
              <span className="inline-block align-middle">
                Email@gmail.com
              </span>
            </button>
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

          <div className="flex justify-center sm:justify-end" style={{ marginTop:34}}>
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
