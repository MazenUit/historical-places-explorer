import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { historicalPlaces } from "../data/places"
import { usePlacesStore } from "../store/usePlacesStore"
import "./globals.css"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const setPlaces = usePlacesStore((state) => state.setPlaces)

  useEffect(() => {
    setPlaces(historicalPlaces)
    const hideSplash = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800))
      await SplashScreen.hideAsync()
    }
    hideSplash()
  }, [])

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" /> 
        <Stack.Screen name="[id]" options={{ headerShown: true }} />
      </Stack>
    </SafeAreaProvider>
  )
}
