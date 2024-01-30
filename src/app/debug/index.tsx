import { Button, StyleSheet, View } from "react-native";

export default function Debug() {



    return <>
        <View style={styles.container}>
            <Button title="click me" onPress={() => console.log("Clicked")} />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
