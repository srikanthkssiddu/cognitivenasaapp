import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Home from './src/components/HomeScreen';
import App1 from "./src/components/AsteroidDetail"; 


const Stack = createNativeStackNavigator();
  
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            title: 'NASA App',
            headerStyle: {
            backgroundColor: '#191970',
            
            },
            headerTintColor: '#dcdcdc',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}/>
        <Stack.Screen name="AsteroidDetail" component={App1}
          options={{
            title: 'Asteroid Details',
            headerStyle: {
            backgroundColor: '#191970',

            },
            headerTintColor: '#dcdcdc',
            headerTitleStyle: {
            fontWeight: 'bold',
            
            },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;