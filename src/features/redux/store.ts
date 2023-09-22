import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postsAPI} from "../posts/redux/PostsService";


const rootReducer = combineReducers({
    [postsAPI.reducerPath]: postsAPI.reducer
})

export const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']