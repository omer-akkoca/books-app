import React from "react"
import { withNavigation } from "react-navigation";
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity
} from "react-native";

const BookCard = ({book,...props}) =>{

    const { title, image, isbn13 } = book;

    const { cardContainer, titleStyle, imageContainer, imageStyle, buttonStyle, buttonText} = styles

    const goRoute = (path,data) => {
        props.navigation.navigate(path,data)
    }

    return(
        <View style={cardContainer}>
            <Text style={titleStyle}>{title}</Text>
            <View style={imageContainer}>
                <Image style={imageStyle} source={{uri : image}}/>
            </View>
            <TouchableOpacity style={buttonStyle} onPress={() => goRoute("BookDetail",{isbn13})}>
                <Text style={buttonText}>Show the Detaıls</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer : {
        margin: 10,
        padding: 10,
        backgroundColor : 'gray'
    },
    titleStyle : {
        textAlign : "center",
        padding: 10,
        borderBottomWidth : 2,
        fontSize : 16,
        color : 'black',
        fontWeight : 'bold'
    },
    imageContainer : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    imageStyle : {
        width: 250,
        height: 291
    },
    buttonStyle : {
        backgroundColor : 'black',
        padding: 10
    },
    buttonText : {
        textAlign : 'center',
        color: 'white',
        letterSpacing : 3,
        textTransform : "uppercase"
    }
})

export default withNavigation(BookCard);