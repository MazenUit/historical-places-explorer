import { Image, Pressable, Text, View } from "react-native"
import { Place } from "../types/place"

type Props = {
  place: Place
  onToggleVisited?: () => void
  showToggle?: boolean
}

export function PlaceCard({ place, onToggleVisited, showToggle = true }: Props) {
  return (
    <View className="bg-white rounded-2xl px-4 py-3 mb-4 shadow-sm">
      <Pressable
        className="flex flex-col"
        onPress={showToggle && onToggleVisited ? onToggleVisited : undefined}
        disabled={!showToggle}
      >
        <View className="flex-row justify-between items-start">
          <View className="flex-1 pr-3">
            <View
              className={`px-2 py-1 rounded-full mb-2 self-start ${
                place.visited ? "bg-green-50" : "bg-indigo-50"
              }`}
            >
              <Text
                className={`text-xs font-semibold ${
                  place.visited ? "text-green-600" : "text-indigo-600"
                }`}
              >
                {place.visited ? "Visited" : "Unvisited"}
              </Text>
            </View>
            <Text className="text-lg font-semibold text-gray-900">
              {place.name}
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              {place.description}
            </Text>
          </View>
          <Image source={{ uri: place.image }} className="w-20 h-20 rounded-xl" />
        </View>

        {showToggle && (
          <View className="items-end pt-3">
            <Text
              className={`text-sm font-semibold ${
                place.visited ? "text-green-600" : "text-blue-600"
              }`}
            >
              {place.visited ? "✓ Visited" : "Tap to Mark"}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  )
}
