import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import LandingScreen from '../screens/onboarding/LandingScreen';
import PhoneNumberScreen from '../screens/onboarding/PhoneNumberScreen';

type OnboardingStackParamList = {
  LandingScreen: undefined;
  PhoneNumberScreen: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const OnboardingNavigation: React.FC = () => {
  return (
    <>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="PhoneNumberScreen"
        component={PhoneNumberScreen}
        options={screenOptions}
      />
    </>
  );
};

export default OnboardingNavigation;

const styles = StyleSheet.create({});
