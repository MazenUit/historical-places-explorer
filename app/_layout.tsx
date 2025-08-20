import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { historicalPlaces } from "./data/places"
import "./globals.css"
import { usePlacesStore } from "./store/usePlacesStore"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const setPlaces = usePlacesStore((state) => state.setPlaces)

  useEffect(() => {
    setPlaces(historicalPlaces)
    const hideSplash = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await SplashScreen.hideAsync()
    }
    hideSplash()
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
