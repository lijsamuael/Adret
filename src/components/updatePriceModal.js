import React from "react";

const UpdatePriceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-gray-800 bg-opacity-90">
      <div className="relative max-w-[1200px] w-[95%] sm:w-9/12 lg:w-7/12 2xl:w-6/12 mx-auto mt-24 overflow-hidden rounded-lg text-white bg-black  shadow-lg">
        <div className="flex flex-col space-y-[50px]   px-4 ssm:px-[30px] sm:px-[40px]  lg:px-12 xl:px-[60px] 2xl:px-20 pt-[21px] pb-[90px]  h-full rounded-lg">
          <div className="space-y-[32px] pt-[70px]">
            <h2 className=" font-bold font-sans   text-[40px] ">
              Update Price
            </h2>
            <p className="text-xl font-bold">
              Update price for the size 12 X 23
            </p>
          </div>
          <div className="flex flex-col  space-y-[21px]">
            <div class=" flex flex-col space-y-[17px]">
              <p className="font-bold text-xl">Artist's Share:</p>

              <input
                className="w-full max-w-[1200px] h-[67px] px-3 py-4 rounded-md  text-xl font-normal text-gray-700 bg-gray-700"
                type="text"
                placeholder="Enter Artist's Share:"
              />
              <p className="font-bold text-xl">Price:</p>

              <input
                className="w-full max-w-[1200px] h-[67px] px-3 py-4 rounded-md  text-xl font-normal text-gray-700 bg-gray-700"
                type="text"
                placeholder="Enter Price"
              />
            </div>
          </div>
          <div className="flex space-x-8 justify-center sm:justify-end">
            <button
              className="max-w-[160px] w-full py-4  text-black bg-white rounded hover:bg-gray-200 focus:bg-gray-200 text-xl font-bold"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="max-w-[160px] w-full py-4  text-white bg-orange-500 rounded hover:bg-orange-600 focus:bg-orange-600 text-xl font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePriceModal;
