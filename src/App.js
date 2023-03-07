import React, { useState } from 'react';
import Modal from './components/submitReportModal';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600" onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
