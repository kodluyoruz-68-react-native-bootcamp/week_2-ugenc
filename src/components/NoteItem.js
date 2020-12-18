import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function NoteItem({item, handleLongPress, handlePress}) {
  var itemBackground = 'white';

  if (item.item.isDone) {
    itemBackground = '#e9e9e9';
  }

  return (
    <TouchableOpacity
      style={[styles.noteContainer, {backgroundColor: itemBackground}]}
      onLongPress={() => handleLongPress(item.item.id)}
      onPress={() => handlePress(item.item.id)}>
      <Text style={styles.noteText}>{item.item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 11.14,

    elevation: 17,
  },
  noteText: {
    fontSize: 20,
    color: 'gray',
  },
});
