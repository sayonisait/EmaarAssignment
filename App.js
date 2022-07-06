import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/app/store';
import UserListScreen from './src/users/UserList';
import UserDetail from './src/users/UserDetail';
import ErrorBoundary from './src/components/ErrorBoundary';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ErrorBoundary>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={UserListScreen} />
            <Stack.Screen name="Details" component={UserDetail} />
          </Stack.Navigator>
        </ErrorBoundary>

      </NavigationContainer>
    </Provider>

  );
}

export default App;