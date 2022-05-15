import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Arrow from '../../assets/ListHeaderComponent/Arrow.png'

export default function ListHeaderComponent(props) {

    const backButton = () => {
        props.navigation.goBack()
        console.log(props)
    }

  return (
    <View style = {styles.container}> 
      <Image style ={{width: 30, height: 30, alignSelf: 'center', marginLeft: 10}} source= {Arrow} onTouchEnd = {backButton}/>
      <Text style ={{fontSize:20, fontWeight: '600', color: '#F25E04', marginLeft: 80, }}>{props.CurrentCategory.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     flex: 1 ,
     flexDirection: 'row',
     alignItems: 'flex-start',
     margin: 0,
     padding: 0,
 }
})