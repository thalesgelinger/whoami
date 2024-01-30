import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';


export {
    ErrorBoundary,
} from 'expo-router';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    return (
        <>
            <Link href="/debug/" asChild>
                <Pressable style={styles.debug}>
                    <Text>DEBUG</Text>
                </Pressable>
            </Link>
            <ThemeProvider value={DefaultTheme}>
                <Stack>
                    <Stack.Screen name='debug/index' options={{
                        headerShown: false,
                        animation: "slide_from_bottom",
                        presentation: "modal",
                    }} />
                </Stack>

            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    debug: {
        position: 'absolute',
        zIndex: 10,
        top: 50,
        right: 30,
        backgroundColor: 'blue',
        padding: 4
    }
})
