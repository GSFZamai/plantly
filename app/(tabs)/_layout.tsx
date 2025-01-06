import { Redirect, Tabs } from 'expo-router';
import { theme } from '@/theme';
import { Entypo, Feather } from '@expo/vector-icons';
import { useUserStore } from '@/store/userStore';

export default function TabsLayout() {
  const hasCompletedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (!hasCompletedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colorGreen,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
