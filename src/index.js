import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import './styles/App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <BookList />
      <Footer/>
    </>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
