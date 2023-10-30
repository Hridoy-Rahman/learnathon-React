// import React from 'react';

// const SimpleComponent = () => {
//     return (
//         <div>
//             This is a simple class component
//         </div>
//     );
// };

// export default SimpleComponent;


import { Component } from "react";

export class SimpleComponent extends Component{
    render(){
        return (
            <h1>This is a simple class component</h1>
        )
    }
}