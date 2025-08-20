import { FlatList, Text, View } from "react-native"
import { PlaceCard } from "../components/PlaceCard"
import { usePlacesStore } from "./store/usePlacesStore"

export default function Visited() {
  const places = usePlacesStore((state) => state.places)
  const visitedPlaces = places.filter((p) => p.visited)

  if (visitedPlaces.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-indigo-400 px-6">
        <Text className="text-lg font-semibold text-white">
          No visited places yet
        </Text>
        <Text className="text-sm text-white mt-2">
          Start exploring and mark places as visited!
        </Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-indigo-400 p-4">
      <FlatList
        data={visitedPlaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceCard place={item} showToggle={false} />}
      />
    </View>
  )
}
