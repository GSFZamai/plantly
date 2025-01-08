import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="onboarding" options={{ presentation: 'modal' }} />
      <Stack.Screen
        name="new"
        options={{
          presentation: 'modal',
          title: 'New plant',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
