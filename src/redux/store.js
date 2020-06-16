import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Middlewares
import ReduxThunk from 'redux-thunk';

// Reducers
import contactsReducer from './contacts/contactsReducer';

// Композиция (комбинирование) редюсеров
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const middleware = [ReduxThunk];
// Порядок выполнения middleware (прослоек) - слева/направо
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
