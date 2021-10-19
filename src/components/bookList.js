import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import BookCard from './bookCard';

const BookList = ({page}) => {

    const [books, setbooks] = useState([])

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/ab/${page}`)
        .then(resp => resp.json())
        .then(result => setbooks(result.books))
    }, [page])

    return (
        <View>
            <FlatList 
                data={books}
                renderItem={({item}) => {
                    return(
                        <BookCard book={item}/>
                    )
                }}
                keyExtractor={(item)=> item.id} // bu sekılde de key verılebılır*/
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default BookList;