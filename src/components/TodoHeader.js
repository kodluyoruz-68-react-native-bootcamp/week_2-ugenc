import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TodoHeader({count}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Tudu</Text>
      </View>
      <View style={styles.noteContainer}>
        <Text style={styles.note}>
          There {count > 1 ? 'are' : 'is'} {count}
        </Text>
        <Text style={styles.note}>thing{count > 1 ? 's' : null} to do.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    flex: 1,
    marginVertical: 20,
  },
  headerContainer: {},
  header: {
    fontSize: 60,
    fontWeight: '800',
    color: 'gray',
  },

  noteContainer: {flex: 1, justifyContent: 'center'},
  note: {
    fontSize: 20,
    fontWeight: '800',
    color: 'gray',
    textAlign: 'right',
  },
});
