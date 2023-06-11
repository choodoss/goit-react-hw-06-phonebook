import { reducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({ reducer: reducer })

// import { createStore } from "redux";
// export const store = createStore(reducer)