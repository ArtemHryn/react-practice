import { Button } from '@mui/material';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { words } from 'redux/selectors';

export const DownloadButton = () => {
  const downloadWords = useSelector(words);
  const onDownload = () => {
    const wordBook = XLSX.utils.book_new();
    const wordsSheet = XLSX.utils.aoa_to_sheet([
      ['id', 'Eng Word', 'Ukr Word', 'Learned'],
      ...downloadWords.map((word, index) => [
        index + 1,
        word.engWord,
        word.ukrWord,
        word.isLearn,
      ]),
    ]);
    console.log(wordsSheet);
    XLSX.utils.book_append_sheet(wordBook, wordsSheet, 'Words');
    XLSX.writeFile(wordBook, 'Our_words.xlsx');
  };
  return (
    <Button type="button" onClick={onDownload}>
      Download Words
    </Button>
  );
};
