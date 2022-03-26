
import './App.css';
import Question from './Component/Question/Question';


import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 className='header-name'>Boi-Ghor</h1>
      <p className='content'>Choose Your Books</p>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}


export default App;
