import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider, useDispatch } from "react-redux"
import { fetchPlaces } from "../store/redux/placesSlice"
import { store } from "../store/redux/store"
import "./globals.css"

SplashScreen.preventAutoHideAsync()

function RootLayoutInner() {
  const dispatch = useDispatch()

  useEffect(() => {
    // ✅ Load places once on startup
    dispatch(fetchPlaces())

    const hideSplash = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800))
      await SplashScreen.hideAsync()
    }
    hideSplash()
  }, [dispatch])

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

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootLayoutInner />
    </Provider>
  )
}
