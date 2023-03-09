import React from "react";

const UpdateBannerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-80">
      <div className="relative max-w-[1200px] w-[95%] sm:w-9/12 lg:w-7/12 2xl:w-6/12 mx-auto mt-24 overflow-hidden rounded-lg text-white bg-black  shadow-lg">
        <div className="flex flex-col space-y-[47px]   px-4 ssm:px-[30px] sm:px-[40px]  lg:px-12 xl:px-[60px] 2xl:px-20 pt-[21px] pb-[90px]  h-full rounded-lg">
          <h2 className=" font-bold  text-center font-sans   text-[40px] ">
            Update Banner#1
          </h2>
          <div className="flex flex-col  space-y-[21px]">
          <div class=" flex flex-col space-y-[8px]">
            <p className="font-medium text-xl">Title:</p>

              <input
                className="w-full max-w-[1200px] h-[67px] px-3 py-4 rounded-md  text-xl font-normal text-gray-700 bg-gray-700"
                type="text"
                placeholder="Title of the art"
              />
            </div>

            <div class=" flex flex-col space-y-[8px]">
            <p className="font-bold text-xl">Description:</p>

              <input
                className="w-full max-w-[1200px] h-[83px] px-3 py-4 rounded-md  text-xl font-normal text-gray-700 bg-gray-700"
                type="text"
                placeholder="Enter description"
              />
            </div>

            <div className="flex flex-col space-y-[8px]">
              <p className=" font-bold text-xl">Upload Image</p>

              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-[380px] border-[1px] border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6 space-y-[23px]">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-bold text-xl">Upload Image</span>
                    </p>
                    <p class="font-bold text-xl text-gray-500 dark:text-gray-400 break-words text-ellipsis  text-center">
                      Drag and drop your image into the input field.
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
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
    </div>
  );
};

export default UpdateBannerModal;
