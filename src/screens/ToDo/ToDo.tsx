import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Pages from '../../data/Pages';
import {MMKV} from 'react-native-mmkv';
import CustomButton from '../../components/Button';

// MMKV Storage
const storage = new MMKV();

export default function ToDoScreen() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    loadTodos();
  }, []);

  const saveTodos = currentTodos => {
    storage.set('todos', JSON.stringify(currentTodos));
  };

  const loadTodos = () => {
    const storedTodos = storage.getString('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoList = [
        ...todos,
        {id: Date.now(), text: newTodo, completed: false},
      ];
      setTodos(newTodoList);
      saveTodos(newTodoList);
      setNewTodo('');
    }
  };

  const toggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    saveTodos(filteredTodos);
  };

  const renderItem = ({item}) => (
    <View style={styles.todoItem}>
      <Text
        style={{
          fontSize: 18,
          color: '#000',
          textDecorationLine: item.completed ? 'line-through' : 'none',
        }}>
        {item.text}
      </Text>
      <View style={styles.actions}>
        <CustomButton
          title="Sil"
          onPress={() => deleteTodo(item.id)}
          style={{backgroundColor: 'darkred'}}
        />
        <CustomButton
          title={item.completed ? 'Completed' : 'Task'}
          onPress={() => toggleTodo(item.id)}
          isDone={item.completed}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[9].index}</Text>
        <Text style={styles.title}>{Pages[9].title}</Text>
        <Text style={styles.description}>{Pages[9].description}</Text>
      </View>
      <View style={{marginTop: 16}}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add Task"
            value={newTodo}
            placeholderTextColor={'#aaa'}
            cursorColor={'darkblue'}
            onChangeText={text => setNewTodo(text)}
          />
          <CustomButton title="Add" onPress={addTodo} style={{flex: 1}} />
        </View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginTop: 8,
    color: '#000',
    letterSpacing: -0.75,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
  },
  function: {
    fontSize: 24,
    color: '#234897',
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    width: '75%',
    padding: 16,
    marginRight: 8,
    borderRadius: 12,
    fontSize: 16,
    letterSpacing: -0.5,
    backgroundColor: '#f0f0f0',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
    borderRadius: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
