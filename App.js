
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TodoItem from './components/todoItem';
import Header from './components/header';

export default function App() {
  var [todos, setTodos] = useState([
    {text:'Wash the dishes', key:'1'},
    {text:'Wake up at 7 a.m', key:'2'},
  ]);
  var deleteTodo = (val) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
      return todo.key != val;
    });
  });
  }; 

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
      data={todos}
      renderItem={({item}) => {
        return (
          <TodoItem text={item.text} deleteTodo = {() => deleteTodo(item.key)}/>
        );
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
