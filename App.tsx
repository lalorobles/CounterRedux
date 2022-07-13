import { StyleSheet, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import Principal from "./src/components/Principal";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <Provider store={store}>
      <Principal />
    </Provider>
  );
}
