import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NotesContext } from '../context/NotesContext';

const CreateNotesScreen = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { state, dispatch } = useContext(NotesContext);
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

            <Button title='Save'
                onPress={() => {
                    dispatch({ type: "ADD", payload:{title:title, content:content}})
                    navigation.goBack()
                } }
                
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

export default CreateNotesScreen;