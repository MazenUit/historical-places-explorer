import { FlatList, Image, Pressable, Text, View } from "react-native"
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
          <View className="bg-white rounded-2xl px-4 py-3 mb-4 shadow-sm">
            <Pressable
              className="flex flex-col"
              onPress={() => toggleVisited(item.id)}
            >
              <View className="flex-row justify-between items-start">
                <View className="flex-1 pr-3">
                  <View className="bg-indigo-50 px-2 py-1 rounded-full mb-2 self-start">
                    <Text className="text-indigo-600 text-xs font-semibold">
                      {item.visited ? "Visited" : "Unvisited"}
                    </Text>
                  </View>
                  <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
                  <Text className="text-xs text-gray-500 mt-1">{item.description}</Text>
                </View>
                <Image
                  source={{ uri: item.image }}
                  className="w-20 h-20 rounded-xl"
                />
              </View>
              <View className="items-end pt-3">
                <Text
                  className={`text-sm font-semibold ${
                    item.visited ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  {item.visited ? "✓ Visited" : "Tap to Mark"}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}
