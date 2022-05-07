import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native'
import React from 'react'
import Cucumber from '../../assets/category/cucumber.png'

const DATA = [
    {
        ProductId: 1,
        title: 'Огурцы',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 2,
        title: 'Огурцы',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 3,
        title: 'Огурцы',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 4,
        title: 'Огурцы',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 5,
        title: 'Творог',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 3
    },
    {
        ProductId: 6,
        title: 'Курица',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 2
    },
]



const ProductList = (props) => {
    const CurrentCategory = props.route.params
    
    const productInfoScreen = (data) => {
        // console.log(data)
    }
    
    const ProductItem = ({ data }) => {
        return (
            <TouchableHighlight onPress={() => { productInfoScreen(data) }} underlayColor="#F1F1F1" >
                <View style={styles.ProductItem}>
                    <View style={styles.ProductText}>
                        <Text style={styles.ProductTitle}>{data.title}</Text>
                        <Text style={styles.ProductDescription}>{data.description}</Text>
                    </View>
                        <Image style={styles.ProductImg} source={data.img} />
                        <Text style={styles.ProductCost}>{data.cost}₽</Text>
                </View>
            </TouchableHighlight>
        )
    }  

    const RenderItem = ({ item }) => {
        return (
            <ProductItem data={item}/>
        )
    }

    return (
        <FlatList 
            key={1}
            numColumns={2}
            style={styles.FlatList}
            data={DATA}
            renderItem={RenderItem}
            keyExtractor={item => item.ProductId}
        />

    )
};


const styles = StyleSheet.create({
    FlatList: {
        alignSelf:'center',
        paddingTop: 120,
    },
    ProductItem: {
        width: 140,
        height: 170,
        flex: 1,
        padding: 10,  
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 0
        }
    },
    ProductImg: {
        resizeMode: "cover",
        width: 60,
        height: 60,
    },
    ProductTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',
        color: '#212121'
    },
    ProductDescription: {
        paddingTop: 5,
        fontSize: 12,
        textAlign: 'center',
    },
    ProductCost: {
        alignSelf: 'flex-end',
        fontSize: 15,
        textAlign: 'right',
        fontWeight: '600',
        color: '#F25E04',
        paddingRight: 0,
        
    },
});


export default ProductList