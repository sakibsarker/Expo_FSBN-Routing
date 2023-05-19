import { Redirect } from "expo-router"
import { Link } from "expo-router";
import { View,Text } from "react-native";
const index = () => {
  // return(
  //   <View>
  //     <Text>Welcome</Text>
  //     <Link href="/message">Go to tab</Link>
  //   </View>
  // )
  return <Redirect href="/home/"/>
  }

export default index