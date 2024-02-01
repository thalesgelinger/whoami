import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import StandardButton from '../components/StandardButton';

export default function Init() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{`Quem sou \nEU?`}</Text>
        </View>

        <View style={styles.menuArea}>
          <Text style={styles.textDescription}>Crie uma Sala</Text>

          <Link href={'/select'} asChild>
            <StandardButton  text="Criar" />
          </Link>

          <Text style={styles.textDescription}>OU</Text>

          <Text style={styles.textDescription}>Entre em uma</Text>

          <Link href={'/select'} asChild>
            <StandardButton text={"Entrar"}/>
          </Link>
         
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
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
    marginVertical: 20,
    textAlign: 'center',
    fontFamily: 'PatrickHandRegular',
  },
});
