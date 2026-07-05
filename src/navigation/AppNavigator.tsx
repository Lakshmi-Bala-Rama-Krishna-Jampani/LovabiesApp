import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../constants/navigation';
import {
  ComparisonScreen,
  LandingScreen,
  LanguageSelectionScreen,
  ParentalGateScreen,
  PlushSelectionScreen,
  WelcomeScreen,
} from '../screens';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.LANGUAGE_SELECTION}
        screenOptions={{
          headerShown: true,
          headerTintColor: colors.textPrimary,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.textPrimary,
          },
          contentStyle: {
            backgroundColor: colors.background,
          },
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name={ROUTES.LANGUAGE_SELECTION}
          component={LanguageSelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.WELCOME}
          component={WelcomeScreen}
          options={{ title: 'Lovabies' }}
        />
        <Stack.Screen
          name={ROUTES.PLUSH_SELECTION}
          component={PlushSelectionScreen}
          options={{ title: 'Lovabies' }}
        />
        <Stack.Screen
          name={ROUTES.COMPARISON}
          component={ComparisonScreen}
          options={{ title: 'Lovabies' }}
        />
        <Stack.Screen
          name={ROUTES.PARENTAL_GATE}
          component={ParentalGateScreen}
          options={{ title: 'Lovabies' }}
        />
        <Stack.Screen
          name={ROUTES.LANDING}
          component={LandingScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
