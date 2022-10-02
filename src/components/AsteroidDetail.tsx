import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card  } from 'react-native-paper';





    export default function App1() {
    
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [nasa_jpl_url, setNasa_jpl_url] = useState([]);
    const [is_potentially_hazardous_asteroid, setIs_potentially_hazardous_asteroid] = useState([]);
    
      const route = useRoute();
    
      const fetchAsteroid = () => {
        var url =""
        if (route.params.paramsKey[1] != null){
          url = "https://api.nasa.gov/neo/rest/v1/neo/"+ String(route.params.paramsKey[1])+"?api_key=QYm7s9WzTfTPzaem5TrDYBY5Yg6ds7nAqLMGQmmr"

        }
        if (route.params.paramsKey[0] != null){

          url = "https://api.nasa.gov/neo/rest/v1/neo/"+ String(route.params.paramsKey[0])+"?api_key=QYm7s9WzTfTPzaem5TrDYBY5Yg6ds7nAqLMGQmmr"       
        }

        console.log(url)
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setId(data['id']);
            setName(data['name']);
            setNasa_jpl_url(data['nasa_jpl_url']);
            setIs_potentially_hazardous_asteroid(String(data['is_potentially_hazardous_asteroid']));
            
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           
            throw error;
          });
        
    };
    useEffect(() => {
      fetchAsteroid();
    }, [])
    
    
    return (
      
      <SafeAreaView style ={styles.container}>
        
        
        <Card style={styles.card}>
        <Card.Content>
       
        <Text style={styles.title1}>-ID : </Text>
        <Text style={styles.title2}> {id} </Text>
        <Text style={styles.title1}>-Name :</Text>
        <Text style={styles.title2}> {name} </Text>
        <Text style={styles.title1}>-NASA JPL URL: </Text>
        <Text style={styles.title2}> {nasa_jpl_url} </Text>
        <Text style={styles.title1}>-Is Potentially Hazardous Asteroid: </Text>
        <Text style={styles.title2}> {is_potentially_hazardous_asteroid} </Text>
        </Card.Content>
        </Card>
      </SafeAreaView>
      
    );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#dcdcdc',
    alignItems: "baseline",
    justifyContent: "flex-start",
    
  },
    title1: {
      fontWeight: "500",
      fontSize: 18,
      padding:0,
      color: '#000080'
    },
    title2: {
      fontWeight: "400",
      fontSize: 18,
      padding:10
    },
    card: {
      paddingLeft:10,
      width:360,
      height:320
    }
    
  });

