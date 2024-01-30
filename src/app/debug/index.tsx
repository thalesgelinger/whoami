import { useRealTime } from "@/src/hooks/useRealTime";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


export default function Debug() {

    const [message, setMessage] = useState("")

    const sendMessage = useRealTime("some-room", ({ payload }) => {
        console.log({ payload })
    })

    const sendBroadcastMessage = async () => {
        const response = await sendMessage({ message })
        console.log({ response })
    }

    return <>
        <View style={styles.container}>
            <TextInput onChangeText={setMessage} style={styles.input} />
            <Button
                title="Send message into broadcast"
                onPress={sendBroadcastMessage}
            />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 200,
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    }
})
