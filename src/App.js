// import logo from './logo.svg';
import './App.css';
import FunctionalHello from './component/FunctionalHello';
import FunctionalParent from './component/FunctionalParent';
import Hello from './component/Hello';
import ParentOperator from './component/ParentOperator';

function App() {
  return (
    <div className="App">
      <Hello name='kamal' />
      <FunctionalHello name='print kamal using functional'/>
      <ParentOperator />
      <FunctionalParent />
    </div>
  );
}

export default App;
