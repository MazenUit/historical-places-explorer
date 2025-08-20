import { useRouter } from "expo-router"
import { useCallback, useState } from "react"
import { FlatList, RefreshControl, View } from "react-native"
import { PlaceCard } from "../../components/PlaceCard"
import { historicalPlaces } from "../../data/places"
import { usePlacesStore } from "../../store/usePlacesStore"

export default function Index() {
  const places = usePlacesStore((state) => state.places)
  const toggleVisited = usePlacesStore((state) => state.toggleVisited)
  const setPlaces = usePlacesStore((state) => state.setPlaces)
  const router = useRouter()
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setPlaces(historicalPlaces)
    setTimeout(() => setRefreshing(false), 800)
  }, [setPlaces])

  return (
    <View className="flex-1 bg-indigo-400 p-4">
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlaceCard
            place={item}
            onPress={() => router.push(`/${item.id}`)}
            onToggleVisited={() => toggleVisited(item.id)}
            showToggle
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#1d4ed8"]}
            tintColor="#1d4ed8"
          />
        }
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}
