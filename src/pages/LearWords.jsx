import { Button, TextField } from '@mui/material';
import Notiflix from 'notiflix';
import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsToLearn } from 'redux/selectors';
import { editWords } from 'redux/wordSlice';
import { NoWords } from 'components/NoWords/NoWords';

export const LearnWords = () => {
  const [translate, setTranslate] = useState('eng');
  const [word, setWord] = useState({});
  const [answer, setAnswer] = useState('');
  const learnWords = useSelector(getWordsToLearn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (learnWords.length === 0) {
      return;
    }
    setWord(learnWords[Math.floor(Math.random() * learnWords.length)]);
  }, [learnWords]);

  const successAnswer = correctAnswer => {
    dispatch(editWords({ ...word, isLearn: false }));
    Notiflix.Report.success('Great!', `You translated ${correctAnswer}`, 'Ok');
    setAnswer('');
  };

  const onAnswer = () => {
    if (translate === 'eng' && answer === word.ukrWord) {
      successAnswer(word.engWord);
    }
    if (translate === 'ukr' && answer === word.engWord) {
      successAnswer(word.ukrWord);
    }
    Notiflix.Report.failure('Sorry!', `It is incorrect answer`, 'Ok', 'No');
  };

  const onInputAnswer = e => {
    setAnswer(e.target.value);
  };

  if (learnWords.length === 0) {
    return <NoWords />;
  }

  return (
    <Box
      background="linear-gradient(to right, #a8ff78, #78ffd6)"
      m="0 auto"
      pt="40px"
      pb="40px"
    >
      <Box display="flex" justifyContent="space-around">
        <Button variant="outlined" onClick={() => setTranslate('eng')}>
          Translate from Eng to Ukr
        </Button>
        <Button variant="outlined" onClick={() => setTranslate('ukr')}>
          Translate from Ukr to Eng
        </Button>
      </Box>
      {translate === 'eng' ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="#e1ede4"
          borderRadius="10px"
          p="20px"
          justifyContent="space-between"
          height="40vh"
          width="700px"
          m="40px auto 0"
        >
          <h2>Some title</h2>
          <p>
            Translate <b>{word.engWord}</b> to Ukr
          </p>
          <TextField
            id="standard-basic"
            label="Answer"
            variant="standard"
            placeholder="Write your answer here"
            onChange={onInputAnswer}
            value={answer}
            autoComplete='off'

          />
          <Button variant="contained" onClick={onAnswer}>
            Answer
          </Button>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="#e1ede4"
          m="40px auto 0"
          borderRadius="10px"
          p="20px"
          justifyContent="space-between"
          height="40vh"
          width="700px"
        >
          <h2>Some title</h2>
          <p>
            Перевести <b>{word.ukrWord}</b> на Англ{' '}
          </p>
          <TextField
            id="standard-basic"
            label="Відповідь"
            variant="standard"
            placeholder="Запиши відповідь"
            onChange={onInputAnswer}
            value={answer}
          />
          <Button variant="contained" onClick={onAnswer}>
            Відповідь
          </Button>
        </Box>
      )}
    </Box>
  );
};
