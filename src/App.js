import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Background from './jumbotron.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
      </header>
      <div className="bg-image"
      style={{
        backgroundImage: 'url(' + Background + ')',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        filter: "blur(2px) brightness(0.5)",
      }}></div>
      <main className="content" >
        <h1 className="content-title">
          Welcome to Recipe Roulette!
        </h1>
      </main>
    </div>
  );
}

export default App;
