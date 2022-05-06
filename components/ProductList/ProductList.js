// import {StyleSheet, Text, View, Image, FlatList, TouchableHighlight} from 'react-native'
// import React from 'react'
// import Cucumber from '../../assets/category/cucumber.png'

// const productData = [
//     {
//         ProductId: 1,
//         title: 'Огурцы',
//         cost: 150,
//         description: 'Самые вкусные!',
//         img: Cucumber,
//         productType: 1
//     },
//     {
//         ProductId: 2,
//         title: 'Огурцы',
//         cost: 150,
//         description: 'Самые вкусные!',
//         img: Cucumber,
//         productType: 1
//     },
//     {
//         ProductId: 3,
//         title: 'Огурцы',
//         cost: 150,
//         description: 'Самые вкусные!',
//         img: Cucumber,
//         productType: 1
//     },
//     {
//         ProductId: 4,
//         title: 'Огурцы',
//         cost: 150,
//         description: 'Самые вкусные!',
//         img: Cucumber,
//         productType: 1
//     },
// ]



// const ProductList = ({data}) => {
//   return (
//     <TouchableHighlight onPress={() => { productScreen(data) }} underlayColor="#F1F1F1" >
//                 <View style={styles.ProductItem}>
//                     <Text style={styles.ProductTitle}>{data.title}</Text>
//                     <Text style={styles.ProductText}>{data.description}</Text>
//                     <Text style={styles.ProductCost}>{data.cost}</Text>
//                     <Image style={styles.ProductImg} source={data.img} />
//                 </View>
//             </TouchableHighlight>
//   )

//   return (
//       <FlatList
//         style ={styles.FlatList}
//         data={productData}
//         renderItem={RenderItem}
//         keyExtractor= {item => item.id}
//       />

//   )
// };


// const styles = StyleSheet.create({
//     ProductItem: {

//         flex: 1,
//         padding: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         alignSelf: 'stretch',
//         backgroundColor: '#fff',
//         margin: 10,
//         marginTop: 20,
//         paddingLeft: 40,
//         borderRadius: 15,
//         shadowColor: "#000",
//         shadowOpacity: 0.2,
//         shadowRadius: 2,
//         shadowOffset: {
//             height: 2,
//             width: 0
//         }
//     },
//     ProductImg: {
//         resizeMode: "cover",
//         width: 100,
//         height: 100,
//     },
//     ProductTitle: {
//         fontSize: 25,
//         fontWeight: '600',
//         color: '#212121'
//     },
// });


// export default ProductList