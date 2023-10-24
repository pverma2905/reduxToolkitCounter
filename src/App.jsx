import './App.css'
import Child from './components/Child'
import {useSelector} from 'react-redux';
function App() {
// const data = useSelector(state=>state)
// console.log("app",data)
 const data = useSelector(state => state.counter.value);
    console.log("mystaate", data)
  return (
    <>
     <h1>App-{data}</h1>
     <Child/>
    </>
  )
}

export default App
