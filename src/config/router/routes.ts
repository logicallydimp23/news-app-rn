/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/prop-types */
import {
  createSwitchNavigator,
  createAppContainer,
} from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import {
  Splash,
  Home,
} from "@screens"

const Main = createStackNavigator({
  Home,
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerShown: false,
  },
})

const AppSwitchNavigator = createSwitchNavigator({
  Splash,
  Main,
}, {
  // Default options
  initialRouteName: "Splash",
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
