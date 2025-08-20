import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
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
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
