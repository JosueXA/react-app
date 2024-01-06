import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';

// if(process.env.NODE_ENV !== 'production') {
//   React.Perf = require('react-addons-perf');
// }

const Canva = () => {
  
  return (
    <>
      <App />
    </>
  )
}

ReactDOM.render(<Canva />, document.getElementById('root'))