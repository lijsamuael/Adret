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

  return (
    <div className="bg-black text-white  h-full">
      <div className="flex flex-col content-center w-full max-w-[1890px] px-[10px]  sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[150px] 2xl:px-[232px] py-[170px] space-y-[67px] mx-auto">
        <div className="space-y-4">
          <h2 className="text-[50px] font-semibold ">Price Table</h2>
          <p className="text-[30px] font-semibold">
            Price and size information for Lorem ipsum
          </p>
        </div>
        <table className=" w-full mx-auto table-fixed text-center">
          <thead className="h-28 ">
            <tr className=" bg-gray-700">
              <th className="font-medium text-xl">No.</th>
              <th className="font-medium text-xl">Size</th>
              <th className="font-medium text-xl">Price</th>
              <th className="font-medium text-xl">Artist's Share</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody className="h-96">
            <tr className="border-b border-b-gray-700">
              <td>1.</td>
              <td>12x13</td>
              <td>100</td>
              <td>100</td>
              <td className=""  onClick={handleOpenUpdatePriceModal}>
                <img src="./images/edit-2.png" alt="" className="mx-auto" />
              </td>
            </tr>
            <tr className="border-b border-b-gray-700">
              <td>2.</td>
              <td>25x34</td>
              <td>250</td>
              <td>250</td>
              <td onClick={handleOpenUpdatePriceModal}>
                <img src="./images/edit-2.png" alt="" className="mx-auto" />
              </td>
            </tr>
            <tr className="border-b border-b-gray-700">
              <td>3.</td>
              <td>90x50</td>
              <td>400</td>
              <td>400</td>
              <td onClick={handleOpenUpdatePriceModal}>
                <img src="./images/edit-2.png" alt="" className="mx-auto" />
              </td>
            </tr>
            <tr className="border-b border-b-gray-700">
              <td>4.</td>
              <td>90x50</td>
              <td>400</td>
              <td>400</td>
              <td onClick={handleOpenUpdatePriceModal}>
                <img src="./images/edit-2.png" alt="" className="mx-auto" />
              </td>
            </tr>
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
