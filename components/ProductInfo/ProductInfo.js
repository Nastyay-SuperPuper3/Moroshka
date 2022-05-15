import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Arrow from '../../assets/ListHeaderComponent/Arrow.png'



const ProductInfo = (props) => {

  const backButtonInfo = () => {
    props.navigation.goBack()
  }

  return (
    <View style={styles.ProductContainer}>
      <View style={styles.InfoHeader}>
      <Image style ={{width: 30, height: 30, alignSelf: 'flex-start' , marginLeft: 10}} source= {Arrow}  onTouchEnd = {backButtonInfo}/>
      <Text style={styles.ProductTitle}>{props.route.params.title}</Text>
      </View>
      <Image style={styles.ProductImage} source={props.route.params.img}/>
      <Text style={styles.ProductDescription}>{props.route.params.description}</Text>
      <Text style={styles.ProductCost}>{props.route.params.cost}₽</Text>
      <View style={styles.BuyButton}>
        <Text style={styles.BuyButtonText}>Купить</Text>
      </View>
    </View>
  )

}


const styles = StyleSheet.create({
  ProductContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 130,
  },
  ProductTitle: {
    marginLeft: 40,
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 50,
  },
  ProductDescription: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 50,
  },
  ProductCost: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 50,
    color: '#F25E04',
    alignSelf: 'flex-end',
  },
  BuyButton: {
    marginBottom: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250, 
    height: 30,
    backgroundColor: '#25A006',
    borderRadius: 20,
  },
  BuyButtonText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
  },
  InfoHeader: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'flex-start',
  }

})

export default ProductInfo
