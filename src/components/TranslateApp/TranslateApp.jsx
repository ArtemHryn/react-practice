import { Modal } from '../Modal/Modal';
import { nanoid } from 'nanoid';
import { useState } from 'react';
// import { Component } from 'react';
import { TranslateFilter } from './TranslateFilter/TranslateFilter';
import { TranslateForm } from './TranslateForm/TranslateForm';
import TranslateTable from './TranslateTable/TranslateTable';

export const TranslateApp = () => {
  const [words, setWords] = useState([])
  const [filter, setFilter] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleAddWord = word => {
    const wordForList = { id: nanoid(4), ...word };
    setWords(prev => [...prev, wordForList])
    onToggleModal()
  };

  const handleFilter = e => {
    setFilter(e.target.value)
  };

  const handleEditWords = editWord => {
    setWords(prev => (prev.map(word => {
      if (word.id === editWord.id) {
        word.engWord = editWord.engWord;
        word.ukrWord = editWord.ukrWord;
        }
        return word;
    })))

  };
  const onDelete = id => {
    setWords(prev => prev.filter(word => word.id !== id))
  };

  const onFilteredWords = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return words.filter(word => {
      return (
        word.engWord.toLowerCase().includes(normalizedFilter) ||
        word.ukrWord.toLowerCase().includes(normalizedFilter)
      );
    });
  };

  const onToggleModal = () => {
    setShowModal(prev => !prev)
  }

    return (
      <>
        <button type="button" onClick={onToggleModal}>
          add new words
        </button>
        {showModal && (
          <Modal closeModal={onToggleModal}>
            <TranslateForm
              onFormSubmit={handleAddWord}
            />
          </Modal>
        )}
        <TranslateFilter value={filter} onFilter={handleFilter} />
        <TranslateTable
          words={onFilteredWords()}
          onDelete={onDelete}
          onEditWord={handleEditWords}
        />
      </>
    );
  }
