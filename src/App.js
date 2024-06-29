import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './state/Counter/CounterSlice';



function App() {
  let dispatch =useDispatch();
  let count = useSelector((state)=> {
    return state.counter.value
})
  return (
    <div>
      <p>The value is : {count}</p>
      <div>
        <button onClick={()=>{dispatch(increment())}}> Increase</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
