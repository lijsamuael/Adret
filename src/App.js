import React, { useState } from 'react';
import Modal from './components/submitReportModal';
import UpdateBannerModal from './components/updateBannerModal'
import PriceTable from './components/priceTable';

const App = () => {
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  const [updateBannerModalIsOpen, setUpdateBannerModalIsOpen] = useState(false);

  const handleOpenReportModal = () => {
    setReportModalIsOpen(true);
  };

  const handleOpenUpdateBannerModal = () => {
    setUpdateBannerModalIsOpen(true);
  };

  const handleCloseReportModal = () => {
    setReportModalIsOpen(false);
  };

  const handleCloseUpdateBannerModal = () => {
    setUpdateBannerModalIsOpen(false);
  };

  return (
    <div>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600" onClick={handleOpenReportModal}>Open Submit Report Modal</button>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600" onClick={handleOpenUpdateBannerModal}>Open Update Banner Modal</button>
      <Modal isOpen={reportModalIsOpen} onClose={handleCloseReportModal} />
      <UpdateBannerModal isOpen={updateBannerModalIsOpen} onClose={handleCloseUpdateBannerModal} />
      <PriceTable/>


    </div>
  );
};

export default App;
