import { Modal } from '../Modal/Modal';
// import { nanoid } from 'nanoid';
import { useState } from 'react';
// import { Component } from 'react';
import { TranslateFilter } from './TranslateFilter/TranslateFilter';
import { TranslateForm } from './TranslateForm/TranslateForm';
import TranslateTable from './TranslateTable/TranslateTable';
import { Button } from '@mui/material';

export const TranslateApp = () => {
  const [showModal, setShowModal] = useState(false)
  document.title = 'Add Words'
  const onToggleModal = () => {
    setShowModal(prev => !prev)
  }

    return (
      <>
        <Button type="button" onClick={onToggleModal}>
          add new words
        </Button>
        {showModal && (
          <Modal closeModal={onToggleModal}>
            <TranslateForm closeModal={onToggleModal} />
          </Modal>
        )}
        <TranslateFilter />
        <TranslateTable />
      </>
    );
  }
