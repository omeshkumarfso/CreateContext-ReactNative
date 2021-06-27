import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList,Button, TouchableOpacity } from 'react-native';
import { NotesContext } from '../context/NotesContext';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const ListNotesScreen = ({navigation}) => {

    const { state, dispatch } = useContext(NotesContext);
    return (
        <View style={{flex:1}}>
            <Button title='Add'
            onPress={() => navigation.navigate("create")}
            />
            <FlatList
                data={state}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={()=> navigation.navigate("show",{id:item.id})}
                        >
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between', 
                            marginHorizontal:10,
                            backgroundColor:'white',
                        elevation:4 
                        }}>
                            <Text style={{ fontSize: 20 }}> {item.title} </Text>
                            <Text style={{ fontSize: 20 }}> {item.id} </Text>
                            <Icon.Button 
                            backgroundColor='white'
                            name="trash" 
                            size={30} color="blue"
                             onPress={()=> dispatch({type:"REMOVE", payload: item.id})}
                             />
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

export default ListNotesScreen