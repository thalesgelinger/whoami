import { useRealTime } from "@/src/hooks/useRealTime";
import { Stack } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Chat() {


    const [messages, setMessages] = useState<{ id: string, message: string }[]>([])
    const [message, setMessage] = useState("")

    const send = useRealTime<{ message: string }>("test", (newMessage) => {
        setMessages(messages => [...messages, newMessage])
    })

    const handleSender = () => {
        send({ message })
        setMessage("")
    }

    return <>
        <Stack.Screen options={{
            headerTitle: "Debug Room",
            headerBackTitle: "debug",
        }} />
        <FlatList
            data={messages}
            renderItem={({ item }) => <View style={styles.messageRow}>
                <Text style={styles.messageId}>id: {item.id}</Text>
                <Text style={styles.messageText}>{item.message}</Text>
            </View>}
            keyExtractor={(_, index) => index.toString()}
        />
        <View style={styles.sendRow}>
            <TextInput
                placeholder="message"
                style={styles.message}
                onChangeText={setMessage}
                value={message}
            />
            <TouchableOpacity
                style={styles.send}
                onPress={handleSender}
            >
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    </>
}

const styles = StyleSheet.create({
    sendRow: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 50
    },
    message: {
        flex: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    send: {},
    messageRow: {
        flex: 1,
        padding: 10
    },
    messageId: {
        flex: 1,
    },
    messageText: {
        flex: 3,
        fontSize: 20
    },
})
