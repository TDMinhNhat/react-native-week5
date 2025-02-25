import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./MainScreen";
import ChooseColorScreen from "./ChooseColor"

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ChooseColor" component={ChooseColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
