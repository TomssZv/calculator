import { useState } from 'react';
import './App.css';

function App() {
  const elem = [1,2,3,4,5,6,7,8,9,0,'.','+','-','*','=', '/', 'c']
  const strelem = ['.','+','-','*','/']
  const [result, setResult] = useState('')

  const add = (elem) => {
    let last = JSON.stringify(result).charAt(result.length);
    let llast = JSON.stringify(result).charAt(result.length -1);
    let x = Object.values(elem)
    if(x[0] === "=") {
      let y = eval(result);
      setResult(JSON.stringify(y))
    } else if (x[0] === 'c') {
      setResult('')
    } else {
      if (typeof x[0] == 'number') {
        if (x[0] == 0 && result.length > 0){
          setResult(result+x[0])
        }else if(last == 0 && result.length > 0) {
          let cnt = 0
          for (let i = 0; i < strelem.length; i++) {
            if (strelem[i] == llast) {
              cnt++
            }
          }
          if (cnt != 0) {
            let tem = result.slice(0, -1)
            setResult(tem+x[0])
          } else {
            setResult(result+x[0])
          }
        } else if (x[0] != 0){
          setResult(result+x[0])
        } 
      } else if (result.length !== 0) {
        let cnt = 0;
        for (let i = 0; i < strelem.length; i++) {
          if (strelem[i] == last) {
            cnt++
          }
        }
        if (cnt == 0) {
          setResult(result+x[0])
        }
      }
    }
  }

  return (
    <div className="App">
      <div id='display'>
        <p>{result}</p>
      </div>
      <div className='btn-contain'>
      <div id='buttons'>
        {elem.map((item) => {
            return (
                <button onClick={() => {add({item})}}>{item}</button>
            );
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
