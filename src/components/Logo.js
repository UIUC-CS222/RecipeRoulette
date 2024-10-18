import logo from '../logo.svg';
import './Logo.css';

function Logo(props){
  return (
    <div className="Logo" style={{ width: props.width, height: props.height }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="logo-title">Recipe Roulette</h1>
    </div>
  );
}

export default Logo;

