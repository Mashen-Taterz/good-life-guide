import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
};

export default App;