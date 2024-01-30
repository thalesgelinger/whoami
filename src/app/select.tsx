import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";


export default function Init() {
    return <>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.container}>
            <Text style={styles.text}>Select</Text>
            <Link href={"/wait"} asChild>
                <Button title="go to Waiting page" />
            </Link>
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
