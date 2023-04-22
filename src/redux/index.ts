import { legacy_createStore as createStore, combineReducers, applyMiddleware, Store, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
// 需要安装@types/redux-promise类型
import reduxPromise from "redux-promise";
import global from "./modules/global/reducer";

const reducer = combineReducers({
	global
});

const persistConfig = {
	key: "redux-state",
	storage: storage
};

const persistReducerConfig = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(reduxThunk, reduxPromise);

const store: Store = createStore(persistReducerConfig, composeEnhancers(middleware));

const persistor = persistStore(store);

export { store, persistor };
