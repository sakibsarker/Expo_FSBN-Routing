import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
    screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign:'center'
        },
      }}>
      <Stack.Screen name="index" options={{headerTitle:'Home'}} />
      <Stack.Screen name="settings" options={{headerTitle:'Setting',}}/>
      <Stack.Screen name="about" options={{headerTitle:'About',}}/>
      <Stack.Screen name="contract" options={{headerTitle:'Contract',}}/>
    </Stack>
  );
}