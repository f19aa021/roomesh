import React from 'react';
import Main from './components/Main';
import Clock from './components/Clock';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div id="bg">
      <Main />
      <Clock />
      <Footer />
    </div>
  );
}
export default App;