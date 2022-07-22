import './App.css';
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
    <section className='intro'>
      <div className='top'>
        <img  width='30px' src={logo} alt='logo'/>
        <img  width='20px' src={menu} alt='menu'/>
      </div>
      <h1>Say hello to ReactJS</h1>
      <p className='page-description'>You will learn how to use the most popular frontend libary, and become a super Ninja developer.</p>
      <button className='button'>Awesome!</button>
    </section>
    <section className='perks'>
      <ul>
        <li>
          <img width='100px' src={icon1} alt='icon1' />
          <label>Declarative</label>
          <p>React makes it painless to create interactive UIs</p>
        </li>
        <li>
          <img width='100px' src={icon2} alt='icon2' />
          <label>Components</label>
          <p>Build encapsulated components that manage their state</p>
        </li>
        <li>
          <img width='100px' src={icon3} alt='icon3' />
          <label>Single-way</label>
          <p>A set to immutable values are passed to the component's.</p>
        </li>
        <li>
          <img width='100px' src={icon4} alt='icon4' />
          <label>JSX</label>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </li>
      </ul>
    </section>

    </div>
  );
}

export default App;
