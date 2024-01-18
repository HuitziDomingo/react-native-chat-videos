import { Text, View, Button } from "react-native"
import { useCounterStore } from "./src/store/counter.store"
// import shallow from 'zustand/shallow'

const { title, count } = useCounterStore(state => ({
  title: state.title,
  count: state.count,
}))

const { increment } = useCounterStore()

export default function () {
  return (
    <View>
      <Text>Hola mundo!!!</Text>
      {/* <Button title="Aumentar" onPress={() => increment} />
      {'\n' + title}
      {'\n' + count} */}
    </View>
  )
}