import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const ListScreen = () => {
    const [Password,setPassword] = useState('');
    return <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect ={false}
                value={Password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {Password.length > 5 ? <Text>My name is {Password}</Text> : <Text>Password must be longer than 5 characters</Text> } 
        </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 3,
        padding:4,
    }
});

export default ListScreen;