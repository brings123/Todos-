import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
export default function AddTodo({ addTodo }){
    var [todo, setTodo] = useState('');
    return (
        <View style={styles.addTodo}>
            <TextInput 
            placeholder="Add new todo"
            onChangeText={(text) => setTodo(text)}
            value={todo}
            style = {styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
            if(todo.length > 4){
                addTodo(todo);
                setTodo('');
            }else{
                Alert.alert('Oops!','The todo must have more than 5 characters',[
                    {text:'UNDERSTOOD', onPress: () => console.log('alert closed')}
                ])
            }
            }}>
                <Text 
                style={styles.buttonText}
                >
                    ADD TODO
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    addTodo:{
        marginHorizontal:35
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'coral',
        paddingHorizontal:10,
        paddingVertical:8,
        borderRadius:8
    },
    input:{
        marginBottom:10,
        borderBottomWidth:2,
        borderBottomColor:"#777",
        paddingVertical:6,
        paddingHorizontal:8,        
    }
})