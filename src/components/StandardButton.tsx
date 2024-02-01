import { Href, Link, Stack } from 'expo-router';
import { forwardRef } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

type StandardButtonProps = {
  text: string;
  onPress?: () => void;
};

export const StandardButton = forwardRef(({ text, onPress, ...rest}: StandardButtonProps, ref) => {

  return (
      <Pressable {...rest}  style={styles.button} onPress={onPress} >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
  );
})

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'PatrickHandRegular',
    color: 'white',
  },
  button: {
    width: 300,
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default StandardButton;
