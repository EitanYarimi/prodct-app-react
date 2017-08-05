import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myStore from './components/Store';

import { BrowserRouter , Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import ProductApi from './services/productsApi';
import {Provider} from 'react-redux';

const store = configureStore({products:ProductApi.getProducts()});

ReactDOM.render(

	<Provider store={store}>
		<BrowserRouter>
		 <div>	 
		    <Route exact path="/" component={myStore}/>
		    <Route path="/products" component={myStore}/>
		  
		 </div>
		</BrowserRouter>
	</Provider>
  
	,document.getElementById('root'));

registerServiceWorker();	



