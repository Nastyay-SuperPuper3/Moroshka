import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cucumber from '../../assets/category/cucumber.png'
import ListHeaderComponent from './ListHeaderComponent'
import BuyButton from '../ProductInfo/BuyButton'
import ProductInfo from '../ProductInfo/ProductInfo'

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
        title: 'Помидоры',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 3,
        title: 'Салат',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 4,
        title: 'Кабачок',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 5,
        title: 'Паттисон',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 6,
        title: 'Курица',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 1
    },
    {
        ProductId: 7,
        title: 'Говядина',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 2
    },
    {
        ProductId: 8,
        title: 'Колбаса',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 2
    },
    {
        ProductId: 9,
        title: 'Сосиски',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 2
    },
    {
        ProductId: 10,
        title: 'Свинина',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 2
    },
    {
        ProductId: 11,
        title: 'Фарш',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 2
    },
    {
        ProductId: 12,
        title: 'Индейка',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 2
    },
    {
        ProductId: 13,
        title: 'Творог',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 3
    },
    {
        ProductId: 14,
        title: 'Молоко',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 3
    },
    {
        ProductId: 15,
        title: 'Йогурт',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 3
    },
    {
        ProductId: 16,
        title: 'Сливки',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 3
    },
    {
        ProductId: 17,
        title: 'Кефир',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 3
    },
    {
        ProductId: 18,
        title: 'Сметана',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 3
    },
    {
        ProductId: 19,
        title: 'Яйца C1',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 4
    },
    {
        ProductId: 20,
        title: 'Яйца C2',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 4
    },
    {
        ProductId: 21,
        title: 'Яйца C3',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 4
    },
    {
        ProductId: 21,
        title: 'Тильзитер',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 5
    },
    {
        ProductId: 22,
        title: 'Маасдам',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 5
    },
    {
        ProductId: 22,
        title: 'Чеддер',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 5
    },
    {
        ProductId: 23,
        title: 'Хлеб',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 6
    },
    {
        ProductId: 24,
        title: 'Булочка',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 6
    },
    {
        ProductId: 25,
        title: 'Кекс',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 6
    },
    {
        ProductId: 26,
        title: 'Пирог',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 6
    },
    {
        ProductId: 27,
        title: 'Круассан',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 6
    },
    {
        ProductId: 28,
        title: 'Конфеты',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 7
    },
    {
        ProductId: 29,
        title: 'Вафли',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 7
    },
    {
        ProductId: 30,
        title: 'Маффин',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 7
    },
    {
        ProductId: 31,
        title: 'Донат',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 7
    },
    {
        ProductId: 32,
        title: 'Печенье',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 7
    },
    {
        ProductId: 33,
        title: 'Пирожное',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 7
    },
    {
        ProductId: 34,
        title: 'Макарон',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 7
    },
    {
        ProductId: 35,
        title: 'Яблоки',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 36,
        title: 'Бананы',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 37,
        title: 'Арбуз',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 38,
        title: 'Мандарины',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 39,
        title: 'Лимоны',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 40,
        title: 'Груша',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 41,
        title: 'Виноград',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 42,
        title: 'Яблоки',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 8
    },
    {
        ProductId: 43,
        title: 'Треска',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 9
    },
    {
        ProductId: 44,
        title: 'Палтус',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 9
    },
    {
        ProductId: 45,
        title: 'Форель',
        cost: 150,
        description: 'Самые вкусные!',
        img: Cucumber,
        productType: 9
    },

]



const ProductList = (props) => {
    const CurrentCategory = props.route.params

    const productInfoScreen = (data) => {
        props.navigation.navigate('ProductInfo', data)
    }

    const [filtredProducts, setFiltredProducts] = useState([])

    useEffect(() => {
        setFiltredProducts(
            DATA.filter((product) => {
                return product.productType == CurrentCategory.id
            })
        )

    }, [CurrentCategory.id])

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
            <ProductItem data={item} />
        )
    }

    return (
        <FlatList
            ListHeaderComponent={() => (
                <ListHeaderComponent CurrentCategory = {CurrentCategory} navigation= {props.navigation}/>

            )}
            key={1}
            numColumns={2}
            style={styles.FlatList}
            data={filtredProducts}
            renderItem={RenderItem}
            keyExtractor={item => item.ProductId}
        />

    )
};


const styles = StyleSheet.create({
    FlatList: {
        alignSelf: 'center',
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
    CategoryListTitle: {
        fontWeight: '700',
        fontSize: 50,
    }
});


export default ProductList