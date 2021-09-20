import './App.css';
import CountryList from './HelloWorld';
import PureComponent from './PureComponent';
import MemoFn from './MemoHook';
import React,{useState} from 'react';
// /PureComponent - output not depends on global variable its only depnds on local variables.
function App() {
      const [count,setCount] = useState(0);
      const [num,setNum] = useState(0);
      function showAlert(){
            setCount(count+1);
      }
      function showNumAlert(){
            setNum(num+1);
      }
      var countryName=["Australia","Bangladesh","Canada","Denmark","France","Germany","China","Japan","India" ,"Indonesia","Iceland","Bally"];
      var employees = [{0:[10001,"Ben","Male",55000]},{1:[10002,"Sara","Male",55000]},{2:[10003,"Ben","Mark",55000]},{3:[10004,"Pam","Male",55000]},{4:[10005,"Todd","Male",55000]}]
      return ( <div className = "App">
            <CountryList countryName={countryName} employees={employees} />
            <PureComponent />
            <div>
            <MemoFn  title="Heat" 
                  releaseDate="December 15, 1995" dvClick={showAlert} count={count} />
                        <MemoFn title="Heat" 
                  releaseDate="December 15, 1995" dvClick={showNumAlert} count={num} />
                      </div>  </div>);
}
export default React.memo(App); 