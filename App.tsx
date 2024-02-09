import { Text, View, Button } from "react-native"

import { useStore, getUsersStore } from './src/store/counter.store'




export default function () {

  const { count, inc } = useStore()
  const { getUsers } = getUsersStore()

  

  return (
    <View>
      <Text>Hola mundo!!!</Text>
      <Text>Probando Zustand!!!</Text>
      <Text>{count}</Text>
      <Button
        onPress={inc}
        title="Aumenta uno"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={getUsers}
        title="Usuarios"
        color="#001599"
      />
    </View>
  )
}