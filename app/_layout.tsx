import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { store } from "../store/redux/store"
import "./globals.css"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    const hideSplash = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800))
      await SplashScreen.hideAsync()
    }
    hideSplash()
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="[id]" options={{ headerShown: true }} />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  )
}
