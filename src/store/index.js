import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import questionReducer from './reducers/questionReducer';
import uploadReducer from './reducers/uploaderReducer';
import creatorReducer from "./reducers/creatorReducer";
import selectedLevel from "./reducers/currentlevelReducer";
import authReducer from "./reducers/AuthReducer";


const persistConfig = {
    key: 'root',
    storage: storage
};

let rootReducer = combineReducers({
    questionReducer,
    uploadReducer,
    creatorReducer,
    selectedLevel,
    authReducer
})

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(ReduxThunk));
window.store = store;
export const persistor = persistStore(store);
window.persistor = persistor;