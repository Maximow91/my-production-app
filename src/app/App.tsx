import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss';
import {Suspense} from 'react';
import {useTheme} from './providers/ThemeProvider';
import {className} from 'shared/lib/classNames/className';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
