import { FlatList, View } from "react-native"
import { PlaceCard } from "../components/PlaceCard"
import { usePlacesStore } from "./store/usePlacesStore"

export default function Index() {
  const places = usePlacesStore((state) => state.places)
  const toggleVisited = usePlacesStore((state) => state.toggleVisited)

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlaceCard
            place={item}
            onToggleVisited={() => toggleVisited(item.id)}
            showToggle
          />
        )}
      />
    </View>
  )
}
