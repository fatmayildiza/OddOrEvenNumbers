import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Simüle edilmiş bir yükleme süresi sonunda splash ekranını gizle
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // 3 saniye sonra gizle (istediğiniz süreyi ayarlayabilirsiniz)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        {isSplashVisible ? (
          <Stack.Screen name="SplashScreen">
  {props => <SplashScreen {...props} />}
</Stack.Screen>

          
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

