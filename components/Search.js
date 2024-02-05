import React,{useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Search({executeSearch}) {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="Search..."
            returnKeyType="Search"
            onSubmitEditing={() => executeSearch(search)}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    searchInput: {
        flex: 0,
        height: 30,
        borderColor: '#333',
        borderWidth: 2,
        paddingHorizontal: 32,
        backgroundColor: '#fff',
        borderRadius: 8,
      },
});