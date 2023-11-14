// import { useCallback, useMemo, useState } from 'react';
import './App.css';
import CounterComponent from './class-3/Component/HOC/counterComponent';
// import UseCallbackAndUseMemoHook from './class-3/Component/Hooks/UseCallback/UseCallbackAndUseMemoHook';
// import UseEffectHook from './class-3/Component/Hooks/UseEffectHook';
// import UseStateHook from './class-3/Component/Hooks/UseStateHook';
// import Heading from './class-3/Component/Hooks/UseCallback/Heading';
// import ShowCount from './class-3/Component/Hooks/UseCallback/ShowCount';
// import Button from './class-3/Component/Hooks/UseCallback/Button';
// import Users from './class-3/Component/Users';
// import UseRef from './class-3/Component/Hooks/UseRef/UseRef';
// import UseReducerHook from './class-3/Component/Hooks/UseReducer/UseReducerHook';
// import Complex from './class-3/Component/Hooks/UseReducer/Complex';

// import StyleWithSCSS from './class-3/Component/StyleWithSCSS/StyleWithSCSS';
// import StyleWithCSSModule from './class-3/Component/StylingInReact/StyleWithCSSModule';
// import StyleWithGlobalCSS from './class-3/Component/StylingInReact/StyleWithGlobalCSS';
// import StyleWithInlineCSS from './class-3/Component/StylingInReact/StyleWithInlineCSS';

function App() {

//   const [count1,setCount1] = useState(0)
//   const [count2,setCount2] = useState(0)

//   const incrementByOne = useCallback(() =>{
//       setCount1((x) => x+1 )
//   },[])
  
//   const incrementByFive = useCallback(() =>{
//       setCount2((x) => x+5 )
//   },[])

//   const isEvenOrOdd = useMemo(() =>{
//     let i=0;
//     while(i < 1000000000) i++;
//     return count1 % 2===0
// },[count1])


  return (
    <div className="App">
      <header className="App-header">
        <p>React 3rd class Practice</p>


        {/* class-3 Components */}


        {/* <StyleWithSCSS></StyleWithSCSS> */}
        {/* <Users></Users> */}
        {/* <StyleWithCSSModule></StyleWithCSSModule> */}
        {/* <StyleWithGlobalCSS></StyleWithGlobalCSS> */}
        {/* <StyleWithInlineCSS></StyleWithInlineCSS> */}
        {/* <StyleWithSCSS></StyleWithSCSS> */}
        {/* <UseStateHook></UseStateHook> */}
        {/* <UseEffectHook></UseEffectHook> */}
        {/* <UseCallbackAndUseMemoHook></UseCallbackAndUseMemoHook> */}

{/* UseCallback and useMemo */}
        {/* <div>
            <Heading></Heading>
            <ShowCount title={'Counter1'} count={count1}></ShowCount>
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment by One</Button>
            
            <ShowCount title={'Counter2'} count={count2}></ShowCount>
            <Button handleClick={incrementByFive}>Increment by Five</Button>
            
        </div> */}

        {/* <UseRef></UseRef> */}
        {/* <UseReducerHook></UseReducerHook> */}
        {/* <Complex></Complex> */}
        <CounterComponent></CounterComponent>
      </header>
    </div>
  );
}

export default App;
