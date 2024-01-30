import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";


export default function Init() {
    return <>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.container}>
            <Text style={styles.text}>Hello Whoami</Text>
        </View >
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40
    }
})
