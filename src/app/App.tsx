import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss';
import {Suspense} from 'react';
import {useTheme} from './providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {AppRouter} from './providers/router';
import {Navbar} from 'wigets/Navbar';
import {Sidebar} from 'wigets/Sidebar';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='page-content'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
