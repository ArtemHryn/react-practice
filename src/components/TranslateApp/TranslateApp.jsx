import { Modal } from '../Modal/Modal';
// import { nanoid } from 'nanoid';
import { useState } from 'react';
// import { Component } from 'react';
import { TranslateFilter } from './TranslateFilter/TranslateFilter';
import { TranslateForm } from './TranslateForm/TranslateForm';
import TranslateTable from './TranslateTable/TranslateTable';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWords } from 'redux/operations';
import { motion } from 'framer-motion';
import { DownloadButton } from 'components/DownloadButton/DownloadButton';

export const TranslateApp = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const contoller = new AbortController();
    dispatch(fetchWords(contoller.signal));
    return () => contoller.abort();
  }, [dispatch]);

  const onToggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <motion.div
      initial={{ y: -400, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -400, transition: { duration: 0.5 } }}
    >
      <Button type="button" onClick={onToggleModal}>
        add new words
      </Button>
      <DownloadButton/>
      {showModal && (
        <Modal closeModal={onToggleModal} isOpen={showModal}>
          <TranslateForm closeModal={onToggleModal} />
        </Modal>
      )}
      <TranslateFilter />
      <TranslateTable />
    </motion.div>
  );
};
