import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Touchable} from 'react-native'

const PageTransition = ({page,setpage}) => {

    const handleBack = () => {
        if (page === 1) {
            setpage(1)
        }else{
            setpage(page - 1)
        }
    }

    const handleNext = () => {
        if (page === 50) {
            setpage(50) 
        }else{
            setpage(page + 1)
        }    
    }

    const { container, buttonStyle, buttonTextStyle, pointerStyle} = styles;

    return (
        <View style={container}>
            <TouchableOpacity style={buttonStyle} onPress={handleBack}>
                <Text style={buttonTextStyle}>Back</Text>
            </TouchableOpacity>
            <Text style={pointerStyle}>{page}</Text>
            <TouchableOpacity style={buttonStyle} onPress={handleNext}>
                <Text style={buttonTextStyle}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        justifyContent : 'space-around',
        padding: 10
    },
    buttonStyle : {
        width: 50,
        height: 50,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'black',
        padding: 10,
        borderRadius : 50
    },
    buttonTextStyle : {
        color: 'white'
    },
    pointerStyle : {
        width: 50,
        height: 50,
        textAlign : 'center',
        lineHeight : 50,
        fontSize : 30
    }
})

export default PageTransition;