import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Counter from "../../src/components/Counter";
import { useAppDispatch } from "../../src/app/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../src/features/counter/counterSlice";
import ButtonRedux from "../../src/components/ButtonRedux";

export default function Principal() {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Counter />
      <ButtonRedux
        onPress={() => dispatch(increment())}
        label={"+ 1"}
        size={"large"}
        rounded={"large"}
        type={"primary"}
      />
      <ButtonRedux
        onPress={() => dispatch(decrement())}
        label={"- 1"}
        size={"large"}
        rounded={"large"}
        type={"secondary"}
      />
      <ButtonRedux
        onPress={() => dispatch(incrementByAmount(10))}
        label={"+ 10"}
        size={"large"}
        rounded={"large"}
        type={"info"}
      />
      <ButtonRedux
        onPress={() => dispatch(decrementByAmount(10))}
        label={"- 10"}
        size={"large"}
        rounded={"large"}
        type={"success"}
      />
      <ButtonRedux
        onPress={() => dispatch(reset())}
        label={"Reset"}
        size={"large"}
        rounded={"large"}
        type={"error"}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
