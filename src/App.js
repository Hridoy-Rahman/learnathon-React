import './App.css';
import ControlledUncontrolled from './Component/ControlledUncontrolled';
import FormHandling from './Component/FormHandling';
import FunctionalComponent from './Component/FunctionalComponent';
import ListAndKey from './Component/ListAndKey';
import { SimpleComponent } from './Component/SimpleComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React 2nd class Practice</p>
        {/* <SimpleComponent></SimpleComponent> */}
        {/* <FunctionalComponent 
        name= {"Hridoy Rahman"}
        email={'hridoyrahman@715@gmail.com'}
        passion={"Coding"}></FunctionalComponent> */}
        {/* <ListAndKey></ListAndKey> */}
        {/* <FormHandling></FormHandling> */}
        <ControlledUncontrolled></ControlledUncontrolled>
      </header>
    </div>
  );
}

export default App;
