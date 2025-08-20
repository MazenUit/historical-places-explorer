import { useRouter } from "expo-router"
import { useCallback, useState } from "react"
import { FlatList, RefreshControl, Text, View } from "react-native"
import { PlaceCard } from "../../components/PlaceCard"
import { historicalPlaces } from "../../data/places"
import { usePlacesStore } from "../../store/usePlacesStore"

export default function Visited() {
  const places = usePlacesStore((state) => state.places)
  const setPlaces = usePlacesStore((state) => state.setPlaces)
  const visitedPlaces = places.filter((p) => p.visited)
  const [refreshing, setRefreshing] = useState(false)
  const router = useRouter()

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setPlaces(historicalPlaces)
    setTimeout(() => setRefreshing(false), 800)
  }, [setPlaces])

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
        renderItem={({ item }) => (
          <PlaceCard
            place={item}
            showToggle={false}
            onPress={() => router.push(`/${item.id}`)} 
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
