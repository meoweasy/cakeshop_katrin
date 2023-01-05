import Header from './components/header';
import Menu from './components/menu';
import './style/Main.scss';
import './style/menu.scss';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Slider></Slider>
    </div>
  );
}

export default App;
