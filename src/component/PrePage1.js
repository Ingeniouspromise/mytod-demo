import React,{Component} from "react"
import {Container} from "native-base"
import {Image, View, Text, ImageBackground} from "react-native"
import styles from '../styles/Styles'
import Button from './Button'

const logo = require("../../images/logo.gif");
const background = require("../../images/background1.jpg")

class PrePage1 extends Component{
    render(){
        return(
            <ImageBackground style={{flex:1}}source={background}>
                <View style={styles.container}> 
                     <Image source={logo} style={styles.logo_image}/>
                        <Text style={styles.logo_text}>Tabernable of David</Text>


                <View>
                <Button>
            <Text style={{color:"white", fontFaily:"sans", fontSize:20}}>LOG IN</Text>
          </Button>

          <Button>
            <Text style={{color:"white", fontFaily:"sans", fontSize:20}}>SIGN UP</Text>
          </Button>

                </View>
                </View>    
            </ImageBackground>
                      
            
      

        )
    }
}

export default PrePage1