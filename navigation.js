import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// Import your screen components
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';

function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen options={{presentation: 'modal'}} name="Cart" component={CartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation
