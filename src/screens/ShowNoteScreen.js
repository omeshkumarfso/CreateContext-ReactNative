import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NotesContext } from '../context/NotesContext';

const ShowNoteScreen = ({route,navigation }) => {
    const {id} = route.params ;
    const { state, dispatch} = useContext(NotesContext);
    const note = state.find((record)=> {
        return record.id === id
    })

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ fontSize: 22, color: 'blue' }}>Enter Title:</Text>
            <TextInput
                style={styles.inputBox}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={{ fontSize: 22, color: 'blue' }}>Enter Content:</Text>
            <TextInput
                style={styles.inputBox}
                value={content}
                onChangeText={(text) => setContent(text)}
                numberOfLines={5}
                multiline={true}
            /> 

            <Button title='Update'
                onPress={() => { 
                    dispatch({ type: "UPDATE", payload:{id:id,title:title, content:content} })
                    navigation.navigate("notes")
    }
                } 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        color: 'black',
        fontSize: 18,
        borderWidth: 2,

    }
})

export default ShowNoteScreen;