import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { PlaceCard } from "../../components/PlaceCard"
import { usePlacesStore } from "../../store/usePlacesStore"

export default function Explore() {
  const places = usePlacesStore((state) => state.places)
  const [suggestedPlace, setSuggestedPlace] = useState<typeof places[0] | null>(
    null
  )

  const suggestRandomPlace = () => {
    if (places.length === 0) return
    const randomIndex = Math.floor(Math.random() * places.length)
    setSuggestedPlace(places[randomIndex])
  }

  return (
    <View className="flex-1 bg-indigo-400 p-6">
      <Text className="text-2xl font-bold text-white mb-6 text-center">
        Explore a Random Place
      </Text>

      <Pressable
        onPress={suggestRandomPlace}
        className="bg-indigo-600 rounded-2xl py-4 mb-6"
      >
        <Text className="text-white text-lg font-semibold text-center">
          Suggest a Place
        </Text>
      </Pressable>

      {suggestedPlace ? (
        <PlaceCard place={suggestedPlace} showToggle={false} />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-base">
            Tap the button to get a random place suggestion!
          </Text>
        </View>
      )}
    </View>
  )
}
