import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
          options={() => ({
            title: 'Products',
          })}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} 
          options={() => ({
            title: 'Product Details',
          })}
        />
        <Stack.Screen name="Cart" component={Cart} 
          options={() => ({
            title: 'My Cart',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
