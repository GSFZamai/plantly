import { PlantlyButton } from '@/components/PlantlyButton';
import { PlantlyImage } from '@/components/PlantlyImage';
import { theme } from '@/theme';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

export default function NewScreen() {
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert('Validation Error', 'Give your plant a name');
    }

    if (!days) {
      return Alert.alert(
        'Validation Error',
        `How often does ${name} need to be watered?`
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        'Validation Error',
        'Watering frequency must be a be a number'
      );
    }

    console.log('Adding plant', name, days);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.centered}>
        <PlantlyImage />
      </View>
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="E.g. Casper the Cactus"
          autoCapitalize="words"
        />
        <Text style={styles.label}>Watering Frequency (every x days)</Text>
        <TextInput
          value={days}
          onChangeText={setDays}
          style={styles.input}
          placeholder="E.g. 6"
          keyboardType="number-pad"
        />

        <PlantlyButton title="Add Plant" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  centered: {
    alignItems: 'center',
  },
});
