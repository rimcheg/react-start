import logo from './logo.svg';
import './App.css';
import {Header} from './component/header/header'
import {Footer} from './component/footer/footer'
import {Menu} from './component/menu/menu'
import {Card} from './component/card/card'






function App() {
  return (
    <div>
      <Header/>
      <div className = "flex_block">
        <Menu title = "menu_name" first = "first" second = "second" third = "third"/>
        <div className = "flex_wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
