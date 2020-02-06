import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Dashboardscreen from './src/screens/Dashboardscreen';
import Signupscreen from './src/screens/Signupscreen';
import Loginscreen from './src/screens/Loginscreen';

const navigator = createStackNavigator({
  Dashboard: Dashboardscreen,
  SignUp: Signupscreen,
  SignIn: Loginscreen
}, {
  initialRouteName: 'SignUp',
  defaultNavigationOptions: {
    title: 'SignUp'
  }
});

export default createAppContainer(navigator);

// const switchNavigator = createSwitchNavigator({
//   loginFlow:createStackNavigator({
//     SignUp: Signupscreen,
//     SignIn: Loginscreen
//   }),
//   mainFlow: createBottomTabNavigator({
//     mainFlow: createStackNavigator({
//       Dashboard: Dashboardscreen,
//       StudList: Studentslistscreen
//     })
//   })
// });

// const App =  createAppContainer(switchNavigator);

// export default () => {
//   return (
//         <App ref={(navigator)=>setNavigator(navigator)} />
//   );
// };