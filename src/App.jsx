import Main from './components/Main'
import Clock from './components/Clock'
import Footer from './components/Footer'
// import { ApiFetch } from './components/ApiFetch.tsx';
import './assets/css/style.css';

const App = () => {
  return (
    <div id="bg">
      <Main />
      <Clock />
      <Footer />
    </div>
  );
}
export default App;