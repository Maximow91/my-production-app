import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss';
import {Suspense} from 'react';
import {MainPageAsync} from './pages/MainPage/MainPageAsync';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {useTheme} from './theme/useTheme';
import {Theme} from './theme/ThemeContext';
import {className} from './helpers/classNames/className';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
