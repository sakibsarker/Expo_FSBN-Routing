import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Settings = () => {
  return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
    <Link href="/home/about">Go to About</Link>
  </View>
  )
}

export default Settings