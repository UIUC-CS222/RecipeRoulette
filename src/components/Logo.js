import logo from '../logo.svg';
import './Logo.css';

function Logo(){
  return (
    <div className="Logo">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="logo-title">Recipe Roulette</h1>
    </div>
  );
}

export default Logo;

