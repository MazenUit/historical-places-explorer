import { combineEpics, Epic, ofType } from "redux-observable"
import { of } from "rxjs"
import { catchError, delay, map, switchMap } from "rxjs/operators"
import { historicalPlaces } from "../../data/places"
import {
    fetchPlaces,
    fetchPlacesError,
    fetchPlacesSuccess,
    Place,
} from "./placesSlice"

// Simulated async fetch epic
const fetchPlacesEpic: Epic = (action$) =>
  action$.pipe(
    ofType(fetchPlaces.type),
    switchMap(() =>
      of(historicalPlaces as Place[]).pipe(
        delay(800), // simulate API delay
        map((places) => fetchPlacesSuccess(places)),
        catchError((err) => of(fetchPlacesError(err.message)))
      )
    )
  )

export const rootEpic = combineEpics(fetchPlacesEpic)
