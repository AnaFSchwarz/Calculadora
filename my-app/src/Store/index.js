import {Reducers} from '../Redux'; //pesquisar quando usarchaves ou não
import {createStore, applyMiddleware} from 'redux'; //entre action e reducers e adiciona no API (chamadas assincronas)
import thunk from 'redux-thunk';//bibiloteca (thunk está por padrao no configureStore) 


export const Store = createStore(Reducers); 




