import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    
    return <View>
            <ImageDetail 
                title = "Forest"
                img = {require("../../assets/forest.jpg")}
                score = "9"
            />
            <ImageDetail 
                title = "Beach" 
                img = {require("../../assets/beach.jpg")} 
                score = "8"
            />
            <ImageDetail 
                title = "Mountain" 
                img = {require("../../assets/mountain.jpg")} 
                score = "5"
            />
        </View>;        
};

const styles = StyleSheet.create({
    
  });
  
  export default ImageScreen;
  