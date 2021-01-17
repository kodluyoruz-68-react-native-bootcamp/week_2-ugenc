import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import NewNoteEntry from './components/NewNoteEntry';
import NoteItem from './components/NoteItem';
import TodoHeader from './components/TodoHeader';
import TodoEmpty from './components/TodoEmpty';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countOfDone = todos.filter((todo) => todo.isDone === false).length;
    setCount(countOfDone);
  }, [todos]);

  function addItem(newText) {
    if (newText.length !== 0) {
      const newItem = {
        id: Math.floor(Math.random() * 10000).toString(),
        title: newText,
        isDone: false,
      };
      setTodos([newItem, ...todos]);
    }
  }

  const changeDoneState = (id) => {
    // var updatedTodos = todos.map((todo) =>
    //   todo.id === id
    //     ? {
    //         ...todo,
    //         isDone: !todo.isDone,
    //       }
    //     : todo,
    // );

    // setTodos(updatedTodos);

    const index = todos.findIndex((todo) => todo.id == id);
    const newArray = [...todos];
    newArray[index].isDone = !todos[index].isDone;
    setTodos([...newArray]);
  };

  const deleteItem = (id) => {
    const updatedTodoList = todos.filter((item) => item.id !== id);

    setTodos(updatedTodoList);
  };

  function renderNote(note) {
    return (
      <NoteItem
        item={note}
        handleLongPress={deleteItem}
        handlePress={changeDoneState}
      />
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior="padding"
        enabled>
        <View style={styles.notesContainer}>
          <FlatList
            testID="list"
            ListHeaderComponent={<TodoHeader count={count} />}
            ListEmptyComponent={<TodoEmpty />}
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={renderNote}
          />
        </View>
        <View style={styles.newNotePanel}>
          <NewNoteEntry handleSubmit={addItem} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#f0f0f0f0'},
  notesContainer: {
    flex: 1,
  },
  newNotePanel: {
    flex: 0,
    height: 60,

    position: 'relative',
    marginHorizontal: 20,
    bottom: 30,
  },
});
