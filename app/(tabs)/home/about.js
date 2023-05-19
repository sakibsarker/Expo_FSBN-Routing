import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
    <Link href="/home/contract">Go to Contract</Link>
  </View>
  )
}

export default About