import { nanoid } from 'nanoid';
import { Component } from 'react';
import { TranslateFilter } from './TranslateFilter/TranslateFilter';
import { TranslateForm } from './TranslateForm/TranslateForm';
import TranslateTable from './TranslateTable/TranslateTable';

export class TranslateApp extends Component {
  state = {
    words: [],
    filter: '',
  };
  handleAddWord = word => {
    const wordForList = { id: nanoid(4), ...word };
    this.setState(
      prev => ({ words: [...prev.words, wordForList] }),
      () => console.log(this.state)
    );
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleEditWords = editWord => {
    this.setState(prev => ({
      words: prev.words.map(word => {
        if (word.id === editWord.id) {
          word.engWord = editWord.engWord;
          word.ukrWord = editWord.ukrWord;
        }
        return word;
      }),
    }));
  };
  onDelete = id => {
    this.setState(prev => ({
      words: prev.words.filter(word => word.id !== id),
    }));
  };

  onFilteredWords = () => {
    const { words, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return words.filter(word => {
      return (
        word.engWord.toLowerCase().includes(normalizedFilter) ||
        word.ukrWord.toLowerCase().includes(normalizedFilter)
      );
    });
  };

  render() {
    return (
      <>
        <h1>Hello</h1>
        <TranslateForm onFormSubmit={this.handleAddWord} />
        <TranslateFilter
          value={this.state.filter}
          onFilter={this.handleFilter}
        />
        <TranslateTable
          words={this.onFilteredWords()}
          onDelete={this.onDelete}
          onEditWord={this.handleEditWords}
        />
      </>
    );
  }
}
