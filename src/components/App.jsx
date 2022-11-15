import { LearnWords } from 'pages/LearWords';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { TranslateApp } from './TranslateApp/TranslateApp';

export const App = () => {
  return (
    // <TranslateApp />

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TranslateApp />} />
        <Route path="learn_words" element={<LearnWords/> } />
      </Route>
    </Routes>
  );
};
