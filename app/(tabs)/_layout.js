import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs
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
      <Tabs.Screen
        name="home"
        options={{
          headerShown:false,
          headerTitle:'Home Screen'
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          headerTitle:'List'
        }}
      />
    </Tabs>
  );
}