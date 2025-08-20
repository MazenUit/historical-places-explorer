import { useRouter } from "expo-router"
import { FlatList, View } from "react-native"
import { PlaceCard } from "../../components/PlaceCard"
import { usePlacesStore } from "../../store/usePlacesStore"

export default function Index() {
  const places = usePlacesStore((state) => state.places)
  const toggleVisited = usePlacesStore((state) => state.toggleVisited)
  const router = useRouter()

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
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}
