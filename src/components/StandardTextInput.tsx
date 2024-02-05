import { StyleSheet, TextInput, View } from 'react-native';

type StandardTextInputProps = {
  placeholder: string;
  onChangeText?: (text: string) => void;
};

const StandardTextInput = ({
  placeholder,
  onChangeText,
}: StandardTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        textAlign="left"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    paddingTop: 12,
    paddingRight: 48,
    paddingBottom: 12,
    paddingLeft: 14,
  },
  container: {},
});

export default StandardTextInput;
