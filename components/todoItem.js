import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ text, deleteTodo }){
    return (
        <TouchableOpacity style={styles.todo} onPress={() => deleteTodo()}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    todo:{
        paddingHorizontal:20,
        borderColor:'#bbb',
        paddingVertical:15,
        borderStyle:'dashed',
        marginHorizontal:30,
        borderRadius:10,
        borderWidth:1,
        marginTop:15
    },
    text:{
        fontSize:15,

    }

})