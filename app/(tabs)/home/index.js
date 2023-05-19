import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Home = () => {
  return (
  <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
    <Link href="/home/settings">Go to Settings</Link>
  </View>
  )
}

export default Home