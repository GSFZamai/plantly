import { Link, Redirect, Tabs } from 'expo-router';
import { theme } from '@/theme';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { useUserStore } from '@/store/userStore';
import { Pressable } from 'react-native';

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
          headerRight: () => {
            return (
              <Link href="/new" asChild>
                <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color={theme.colorGreen}
                  />
                </Pressable>
              </Link>
            );
          },
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
