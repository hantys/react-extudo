'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Title name='Pedro' lastname='Fausto'  />
        <hr />
        {
          ['blue', 'green', 'black', 'yellow', 'red'].map((color) => (
            <Square color={color} key={color}/>
          ))
        }
      </div>
    )
  }
}

export default App