import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const ListPage = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
      <Link href="/list/1">Go to One</Link>
      <Link href="/list/2">Go to Two</Link>
      <Link href="/list/3">Go to Three</Link>
    </View>
  )
}

export default ListPage