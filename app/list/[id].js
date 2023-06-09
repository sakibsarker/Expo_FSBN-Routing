import { View, Text } from 'react-native'
import { Stack,useSearchParams } from 'expo-router'

const Details= () => {
  const{id}=useSearchParams();
  return (
    <View>
      <Stack.Screen options={{headerTitle:`Details${id}`}}/>
      <Text>My Details for: {id}</Text>
    </View>
  )
}

export default Details