import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListNotesScreen from './src/screens/ListNotesScreen';
import CreateNotesScreen from './src/screens/CreateNotesScreen';
import ShowNoteScreen from './src/screens/ShowNoteScreen';
import { NotesProvider } from './src/context/NotesContext';

const Stack = createStackNavigator();

function App() {
  return(
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='notes' component={ListNotesScreen} 
       options={{
         headerTitleAlign:'center',
         title:"All Notes" 
       }}
       />
       <Stack.Screen name='create' component={CreateNotesScreen} 
       options={{
         headerTitleAlign:'center',
         title:"Create Notes" 
       }}
       />
       <Stack.Screen name='show' component={ShowNoteScreen} 
       options={{
         headerTitleAlign:'center',
         title:"Show Note" 
       }}
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default () => {
  return(
    <NotesProvider> 
      <App/>
      </NotesProvider>
  );
}
