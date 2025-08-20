import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Place = {
  id: string
  name: string
  description: string
  image: string
  visited: boolean
}

type PlacesState = {
  places: Place[]
  loading: boolean
  error: string | null
}

const initialState: PlacesState = {
  places: [],
  loading: false,
  error: null,
}

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    fetchPlaces: (state) => {
      state.loading = true
      state.error = null
    },
    fetchPlacesSuccess: (state, action: PayloadAction<Place[]>) => {
      state.loading = false
      state.places = action.payload
    },
    fetchPlacesError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    toggleVisited: (state, action: PayloadAction<string>) => {
      state.places = state.places.map((p) =>
        p.id === action.payload ? { ...p, visited: !p.visited } : p
      )
    },
  },
})

export const {
  fetchPlaces,
  fetchPlacesSuccess,
  fetchPlacesError,
  toggleVisited,
} = placesSlice.actions

export default placesSlice.reducer
