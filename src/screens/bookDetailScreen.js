import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';

const BookDetailScreen = (props) => {

    const isbn13 =  props.navigation.getParam("isbn13")

    const [book, setbook] = useState({})

    const { container,padding, titleStyle, imageContainer, imageStyle, authorStyle, linkStyle,infoContainer} = styles

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
        .then(resp => resp.json())
        .then(result => setbook(result))
    },[isbn13])

    return (
        <ScrollView style={container}>
            <Text style={authorStyle}>{book.authors}</Text>
            <View style={imageContainer}>
                <Image source={{uri : book.image}} style={imageStyle}/>
            </View>
            <Text style={titleStyle}>{book.title}</Text>
            <View style={infoContainer}>
                <Text style={padding,{color:'red'}}>Book Informations</Text>
                <Text style={padding}>Page : {book.pages}</Text>
                <Text style={padding}>Price : {book.price}</Text>
                <Text style={padding}>Published Day : {book.year}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(book.url)}>
                    <Text style={linkStyle}>{book.url}</Text>
                </TouchableOpacity>        
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        padding: 15
    },
    padding : {
        padding: 5
    },
    imageContainer : {
        justifyContent : "center",
        alignItems : 'center'
    },
    titleStyle : {
        fontSize : 18,
        textAlign : 'center',
        borderBottomWidth : 1,
        borderColor : 'black',
        padding: 8,
        paddingTop : 0
    },
    imageStyle : {
        width: 325,
        height: 380
    },
    authorStyle : {
        fontSize : 20,
        textAlign : 'center',
        backgroundColor : 'black',
        color: 'white',
        padding: 8
    },
    linkStyle : {
        color: "blue",
        padding: 5
    },
    infoContainer : {
        padding: 15
    }
})

export default BookDetailScreen;