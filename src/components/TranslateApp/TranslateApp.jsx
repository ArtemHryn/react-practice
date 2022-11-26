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
    <>
      <Button type="button" onClick={onToggleModal}>
        add new words
      </Button>
      {showModal && (
        <motion.div
          initial={{ opacity: 1 }}
          // variants={variants}
          // animate={showModal ? 'open' : 'closed'}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Modal closeModal={onToggleModal} isOpen={showModal}>
            <TranslateForm closeModal={onToggleModal} />
          </Modal>
        </motion.div>
      )}
      <TranslateFilter />
      <TranslateTable />
    </>
  );
};
