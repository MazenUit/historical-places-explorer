import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { historicalPlaces } from "./data/places"
import "./globals.css"
import { usePlacesStore } from "./store/usePlacesStore"

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
      <Tabs
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: "#fff" },
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: "600" },
          tabBarActiveTintColor: "#1d4ed8",
          tabBarInactiveTintColor: "#6b7280",
          tabBarStyle: {
            position: "absolute",
            bottom: 40,
            left: 40,
            right: 40,
            backgroundColor: "#dbeafe",
            borderRadius: 9999,
            height: 70,
            paddingBottom: 10,
            paddingTop: 6,
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowOffset: { width: 0, height: -2 },
            shadowRadius: 6,
            elevation: 4,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap

            if (route.name === "index") iconName = "location-outline"
            else if (route.name === "visited") iconName = "checkmark-done-outline"
            else iconName = "sparkles-outline"

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tabs.Screen name="index" options={{ title: "Places" }} />
        <Tabs.Screen name="visited" options={{ title: "Visited" }} />
        <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      </Tabs>


    </SafeAreaProvider>
  )
}
