
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from './components/todoItem';
import Header from './components/header';
import AddTodo from './components/addTodo';

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
  var addTodo = (val) => {
    
      setTodos(
        (prevTodos) => { 
          return [
            {text:val, key:Math.random().toString()},
            ...prevTodos
          ];
        }
      ) 
    
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <Header />
      <AddTodo addTodo = {(val) => addTodo(val)} />
      <FlatList
        data={todos}
        renderItem={({item}) => {
          return (
            <TodoItem text={item.text} deleteTodo = {() => deleteTodo(item.key)}/>
          );
        }}
      />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
