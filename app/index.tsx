import { useState } from "react"
import { FlatList, RefreshControl, View } from "react-native"
import { PlaceCard } from "../components/PlaceCard"
import { usePlacesStore } from "./store/usePlacesStore"

export default function Index() {
  const places = usePlacesStore((state) => state.places)
  const toggleVisited = usePlacesStore((state) => state.toggleVisited)

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setRefreshing(false)
  }

  return (
    <View className="flex-1 bg-indigo-400 p-4">
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingBottom: 120 }} 
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
