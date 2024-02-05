import { Link, Stack } from 'expo-router';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import StandardButton from '../components/StandardButton';
import StandardTextInput from '../components/StandardTextInput';

export default function Init() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{`Quem sou \nEu?`}</Text>
          </View>

          <View style={styles.menuArea}>
            <Text style={styles.textDescription}>Crie uma Sala</Text>

            <Link href={'/select'} asChild>
              <StandardButton text="Criar" />
            </Link>

            <View style={styles.orArea}>
              <View style={styles.orTrail} />

              <Text style={styles.orText}>OU</Text>
              <View style={styles.orTrail} />
            </View>

            <Text style={styles.textDescription}>Entre em uma</Text>
            <View style={styles.textInput}>
              <StandardTextInput placeholder="ID da sala" />
            </View>

            <StandardButton text={'Entrar'} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'SpaceMono',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
  },
  menuArea: {
    flex: 3,
  },
  textDescription: {
    fontSize: 34,
    textAlign: 'center',
    fontFamily: 'PatrickHandRegular',
    marginBottom: 20,
  },
  orText: {
    textAlign: 'center',
    fontFamily: 'PatrickHandRegular',
    fontSize: 28,
  },
  orArea: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orTrail: {
    width: 120,
    height: 1,
    backgroundColor: 'black',
  },
  textInput: {
    marginBottom: 20,
  },
});
