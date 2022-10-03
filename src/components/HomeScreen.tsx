import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  Button, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Divider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
 

const HomeScreen = () => {
  
  const [AsteroidID, setAsteroidID] = useState('');
  const navigation = useNavigation();
  const [txtinput,setTxtinput] = useState('');
  const getAsteroid = (t1,t2) => {
    navigation.navigate('AsteroidDetail', {
      paramsKey:[t1,t2]
    });
  };

  const randomAsteroid = () => {
    var url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=QYm7s9WzTfTPzaem5TrDYBY5Yg6ds7nAqLMGQmmr"       
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const n = Math.floor(Math.random() * 20);
        setAsteroidID('')
        getAsteroid(null,data["near_earth_objects"][n]["id"])
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       
        throw error;
      });
  };

  
  const nextpage = () =>{
    getAsteroid(AsteroidID,null)
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        animated={true}
        backgroundColor="#dcdcdc"
      />
      <TextInput 
        mode="outlined"
        label="Enter Asteroid "
        style={styles.input}
        onChangeText={(text) => setAsteroidID(text) } />

      <View style={[{ width: "47%", margin: 15 }]}>
        <Button
          title="Submit"
          color='#000080'
          disabled={AsteroidID===''}
          onPress={nextpage}
        />
      </View>
      <Divider/>
      <View style={[{ width: "47%", margin: 15 }]}>
        <Button
          onPress={randomAsteroid}
          title="Random Asteroid"
          color='#000080'
        />
        </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#777',
    backgroundColor: '#dcdcdc',
    margin: 20,
    width: 200,
    height:50
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  }
});

