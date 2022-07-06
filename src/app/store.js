import { configureStore } from "@reduxjs/toolkit";
import usersSaga from "../users/usersSaga";
import usersReducer from "../users/usersSlice";
import createSagaMiddleware from "@redux-saga/core";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [saga]
})
saga.run(usersSaga);

export default store;