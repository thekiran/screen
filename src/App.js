import React, { useEffect, useState } from 'react' 
import { BrowserRouter, Route, Switch } from 'react-router-dom' 

const App = () => {
	 
	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Screen1} />
					<Route path='/screen2' component={screen2} />
					<Route path='/screen3' component={screen3} />
					<Route path='/screen4' component={screen4} />
				</Switch>
				<div className='space' />
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App
