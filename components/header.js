
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}> 
            <Text style={styles.title}>My Todos list</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        height:70,
        backgroundColor:'coral',
        paddingVertical:8,
        paddingHorizontal:6,
        marginBottom:30
    },
    title: {
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
    }
});