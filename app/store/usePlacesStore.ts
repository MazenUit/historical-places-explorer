import { create } from "zustand"

export type Place = {
  id: string
  name: string
  description: string
  image: string
  visited: boolean
}

type PlacesState = {
  places: Place[]
  toggleVisited: (id: string) => void
  setPlaces: (places: Place[]) => void
}

export const usePlacesStore = create<PlacesState>((set) => ({
  places: [],
  toggleVisited: (id) =>
    set((state) => ({
      places: state.places.map((place) =>
        place.id === id ? { ...place, visited: !place.visited } : place
      ),
    })),
  setPlaces: (places) => set({ places }),
}))
