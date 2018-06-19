import React, {Component} from 'react'
import {
    TouchableNativeFeedback,
    StyleSheet, View
} from 'react-native'
import styles from '../styles/Styles'


const Button = ({style, children,  ...otherProps})=>{
    return(
       
<TouchableNativeFeedback
    style={[styles.button, style]}
    background={TouchableNativeFeedback.Ripple("white", false)}
>
    <View style={styles.button}>
        {children}
    </View>
</TouchableNativeFeedback>
        
    )
}

export default Button


