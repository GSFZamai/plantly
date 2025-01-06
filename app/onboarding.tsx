import { Text, View, StyleSheet, Button } from 'react-native';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';
import { router } from 'expo-router';
import { PlantlyButton } from '@/components/PlantlyButton';

export default function OnboardingScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePressButton = () => {
    toggleHasOnboarded();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
      <PlantlyButton title="Onboard" onPress={handlePressButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
