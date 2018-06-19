import React from "react"
import {StyleSheet} from "react-native"
import * as colors from "../colors"

const styles = StyleSheet.create({
    //container styles
    container:{
        flex:1 ,
        justifyContent: "center",
        alignItems:"center",
      
    },
    //Prepage 1 Logo Image Style
    logo_image:{
        width: 150,
        height:150
    },
    //prepage 1 logo heading
    logo_text:{
        fontFamily:"monsBold",
        fontSize:20,
        color: colors.hdColor,

    },
    // prepage buton styles
    button:{
        backgroundColor: colors.hdColor,
        width:120,
        height:47,
        borderRadius: 35,
        padding: 5,
        justifyContent:"center",
        alignItems:"center",
        margin: 10
    },
})

export default styles