import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen, ReportListScreen } from "./src/pages";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ReportList: {
    screen: ReportListScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const App = createAppContainer(AppNavigator);

export default App;
