import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name : "friend#1", age:"13"},
        {name : "friend#2", age:"42"},
        {name : "friend#3", age:"12"},
        {name : "friend#4", age:"51"},
        {name : "friend#5", age:"34"},
        {name : "friend#6", age:"13"},
        {name : "friend#7", age:"73"},
        {name : "friend#8", age:"51"},
        {name : "friend#9", age:"23"},
    ]


    return (<FlatList 
        showsVerticalScrollIndicator ={false}
        keyExtractor={(friend) => friend.name}
        data = {friends} 
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
                </Text>
        }
    }></FlatList>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;