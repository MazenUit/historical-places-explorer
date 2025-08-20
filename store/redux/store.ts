import { configureStore } from "@reduxjs/toolkit"
import { createEpicMiddleware } from "redux-observable"
import { rootEpic } from "./placesEpics"
import placesReducer from "./placesSlice"

const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefault) => getDefault().concat(epicMiddleware),
})

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
