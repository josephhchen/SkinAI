import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApolloWrapper from './ApolloClient';
import OnboardingNavigation from './src/navigators/OnboardingNavigation';

enableScreens();

type RootStackParamList = {
  Onboarding: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <ApolloWrapper>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="Onboarding"
              component={OnboardingNavigation}
              options={{ headerShown: false }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloWrapper>
  );
};

export default App;
