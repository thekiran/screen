import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css' 
const main = document.querySelector('.sweep-head')
const showLoader = () => main.classList.remove('sweep--hide')
const hideLoader = () => main.classList.add('sweep--hide')

ReactDOM.render(
  <App hideLoader={hideLoader} showLoader={showLoader} />,
  document.getElementById('body-wrapper')
)
 