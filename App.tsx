import { Text, View, Button, FlatList, ActivityIndicator } from "react-native"
import { useState, useEffect } from "react"

import { useStore, getUsersStore } from './src/store/counter.store'
import { UsersData } from './src/types/store.type'



export default function () {

  const { count, inc } = useStore()
  const { getUsers } = getUsersStore()

  //Carga de datos
  const [data, setData] = useState<UsersData[]>([])
  const [loading, setLoading] = useState(true)

  const getUsersData = async () => {
    let users = await getUsers()
    setData(users)
    setLoading(false)
  }

  useEffect(() => {
    getUsersData()
  }, [])

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
      
      {
        loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ name }) => name}
            renderItem={({ item }) => (
              <Text>
                ID: {item._id}  Nombre: {item.name}
              </Text>
            )}
          />
        )
      }

    </View>
  )
}