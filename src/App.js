import React from 'react';
import './App.css';
//::::::::::
//STEP 5a: CONNECT! IMPORT CONNECT
import { connect } from 'react-redux';
//STEP 9a: IMPORT GETCHARACERS FROM ACTION 
import { getCharacters } from './state/actions'
import { useEffect } from 'react';

import Header from './components/Header';
import Characters from './components/Characters'

// STEP 6b: PASS PROPS INTO APP. CONSOLE LOG THIS TO SEE!
function App(props) {
console.log(props)



//9b: USING USEEFFECT WE getCHARACTERS. ALSO NOTE REDUX DOESNT HAVE ACCESS TO THIS SO WE GOTTA PASS IT IN AT 9c (we need to add props. to getcharacters)
  // useEffect( ()=> {
  //   props.getCharacters();
  // }, [])


  return (
    <div className="App">
      Async Redux Project
      <Header />
      <Characters />
    </div>
  );
}

//STEP 6a: DELCARE FUNCTION TO GET STATE FROM REDUX: 
//NOTE: parameter is state. all inputs are state and outputs to reducer. This is what redux is in control of.
// const mapStateToProps = (state) => {
//   return{
//     character: state,
//   }
// }

//STEP 5b and 6a: connect here
//9c:
export default App;
//export default connect(mapStateToProps, {getCharacters})(App);