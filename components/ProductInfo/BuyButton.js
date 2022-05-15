import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function(props) {

  return (
    <View  OnTouchEnd= {AddProduct} style= {styles.container}>
        <Text>Купить</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
  }
})