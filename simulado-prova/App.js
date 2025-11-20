
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/bottom/HomeScreen";
import TabNavigator from "./components/TabNavigator";

const App = () => {
  return(
    <NavigationContainer>
      <TabNavigator/> 
    </NavigationContainer>
  )
}

export default App; 