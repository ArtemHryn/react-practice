import { AnimatePresence } from 'framer-motion';
import { LearnWords } from 'pages/LearWords';
import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { TranslateApp } from './TranslateApp/TranslateApp';

export const App = () => {
  const location = useLocation();
  const elementRoutes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <TranslateApp />, index: true },
        { path: 'learn_words', element: <LearnWords /> },
      ],
    },
  ]);
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(elementRoutes, { key: location.pathname })}
    </AnimatePresence>
  );
};
