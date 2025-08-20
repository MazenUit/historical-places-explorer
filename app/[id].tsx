import { Stack, useLocalSearchParams } from "expo-router"
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { usePlacesStore } from "../store/usePlacesStore"

export default function PlaceDetails() {
  const { id } = useLocalSearchParams()
  const place = usePlacesStore((state) => state.places.find((p) => p.id === id))
  const toggleVisited = usePlacesStore((state) => state.toggleVisited)

  if (!place) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600 text-lg">Place not found</Text>
      </View>
    )
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: place.name,
          headerBackTitleVisible: false,
        }}
      />
      <ScrollView className="flex-1 bg-white p-4">
        <Image
          source={{ uri: place.image }}
          className="w-full h-56 rounded-2xl mb-4"
        />
        <Text className="text-lg font-semibold text-gray-900 mb-2">
          {place.name}
        </Text>
        <Text className="text-sm text-gray-600 mb-6">{place.description}</Text>

        <Pressable
          onPress={() => toggleVisited(place.id)}
          className={`mt-4 rounded-xl py-3 px-4 ${
            place.visited ? "bg-green-100" : "bg-blue-100"
          }`}
        >
          <Text
            className={`text-center text-base font-semibold ${
              place.visited ? "text-green-700" : "text-blue-700"
            }`}
          >
            {place.visited ? "✓ Visited" : "Mark as Visited"}
          </Text>
        </Pressable>
      </ScrollView>
    </>
  )
}
