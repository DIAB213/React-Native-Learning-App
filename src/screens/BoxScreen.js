import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    const [Password,setPassword] = useState('');
    return (<View style ={styles.viewStyle}>
        <View style = {styles.viewStyleone}></View>
        <View style = {styles.viewStyletwo}></View>
        <View style = {styles.viewStylethree}></View>
        </View>
    );
};

const styles = StyleSheet.create({

    viewStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    viewStyleone:{
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },

    viewStyletwo:{
        backgroundColor: 'green',
        width: 100,
        height: 100,
        top:100,
        
    },

    viewStylethree:{
        backgroundColor: 'purple',
        width: 100,
        height: 100,
                
    },
});

export default BoxScreen;