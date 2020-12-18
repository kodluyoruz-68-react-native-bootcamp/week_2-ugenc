import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function NewNoteEntry({handleSubmit}) {
  const [newItem, setNewItem] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.noteContainer}>
      <TextInput
        testID="input"
        placeholder="pour your mind here"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        style={styles.textInput}
      />
      <TouchableOpacity
        testID="button"
        style={styles.buttonContainer}
        onPress={() => {
          handleSubmit(inputText);
          setInputText('');
        }}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 11.14,

    elevation: 17,
  },
  textInput: {
    flex: 0.9,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    backgroundColor: 'orange',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
  },
});
