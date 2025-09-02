import "./global.css";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigator />
    </>
  );
}
