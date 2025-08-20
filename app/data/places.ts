import { Place } from "../store/usePlacesStore"

export const historicalPlaces: Place[] = [
  {
    id: "1",
    name: "Great Wall of China",
    description: "Ancient wall built to protect China from invasions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/GreatWall_2004_Summer_4.JPG",
    visited: false,
  },
  {
    id: "2",
    name: "Pyramids of Giza",
    description: "Monumental pyramids built as tombs for pharaohs in Egypt.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
    visited: false,
  },
  {
    id: "3",
    name: "Colosseum",
    description: "Ancient Roman amphitheater in the center of Rome.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg",
    visited: false,
  },
]
