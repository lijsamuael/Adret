import React, { useState } from "react";
import UpdatePriceModal from "./updatePriceModal";

function PriceTable() {
  const [updatePriceModalIsOpen, setUpdatePriceModalIsOpen] = useState(false);

  const handleOpenUpdatePriceModal = () => {
    setUpdatePriceModalIsOpen(true);
  };

  const handleCloseUpdatePriceModal = () => {
    setUpdatePriceModalIsOpen(false);
  };


  const priceData = [
    {
      no: 1,
      size: "12x13",
      price: 100,
      share: 100,
    },
    {
      no: 2,
      size: "25x34",
      price: 250,
      share: 250,
    },
    {
      no: 3,
      size: "90x50",
      price: 300,
      share: 300,
    },
    {
      no: 4,
      size: "90x50",
      price: 400,
      share: 400,
    },
  ];

  return (
    <div className="bg-black text-white h-screen overflow-hidden">
      <div className="flex flex-col content-center w-full max-w-[1890px] px-[10px]  sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[150px] 2xl:px-[232px] pt space-y-[55px] sm:space-y-[67px] mx-auto">
        <div className="space-y-3 mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold ">
            Price Table
          </h2>
          <p className="text-base sm:text-lg font-semibold">
            Price and size information for Lorem ipsum
          </p>
        </div>
        <table className=" w-full mx-auto table-fixed text-center ">

          <thead className="h-16 ">
            <tr className=" bg-gray-700 ">
              <th className="font-medium text-xl">No.</th>
              <th className="font-medium text-xl">Size</th>
              <th className="font-medium text-xl">Price</th>
              <th className="font-medium text-xl">Artist's Share</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody className="h-96">
            {priceData.map((data) => (
              <tr className="border-b border-b-gray-700 key={i}">
                <td>{data.no}.</td>
                <td>{data.size}</td>
                <td>{data.price}</td>
                <td>{data.share}</td>
                <td className="" onClick={handleOpenUpdatePriceModal}>
                  <img src="./images/edit-2.png" alt="" className="mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdatePriceModal
        isOpen={updatePriceModalIsOpen}
        onClose={handleCloseUpdatePriceModal}
      />
    </div>
  );
}

export default PriceTable;
