// import logo from './logo.svg';
import './App.css';
import FunctionalHello from './component/FunctionalHello';
import FunctionalParent from './component/FunctionalParent';
import Hello from './component/Hello';
import ParentOperator from './component/ParentOperator';

const App=()=> {
  return (
    <div className="App">
      <Hello name='print kamal using class component' />
      <FunctionalHello name='print kamal using functional'/>
      <ParentOperator />
      <FunctionalParent />
    </div>
  );
}
export default App;
