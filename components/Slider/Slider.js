import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import Arrow from '../../assets/Slider/arrow.png'

const { width } = Dimensions.get('window');
const images = [
    'https://thumbs.dreamstime.com/b/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B8%D1%80%D0%BE%D0%B3%D0%B0-%D0%BA%D0%BB%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D1%83-%D1%81%D1%8B%D1%80%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B-%D0%BF%D1%80%D0%B8%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%B8%D1%89%D0%B8-172366421.jpg',
    'https://thumbs.dreamstime.com/b/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-%D1%81-%D0%B2%D0%B8%D0%B4%D0%BE%D0%BC-%D0%BD%D0%B0-%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D1%87%D0%B8%D1%81%D1%82%D1%8B%D0%B9-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D1%88%D0%BE%D0%BA-%D0%BE%D0%B2%D0%BE%D1%89%D0%B0%D0%BC%D0%B8-231391492.jpg',
    'https://www.crushpixel.com/big-static18/preview4/fruits-berry-food-background-banner-2921428.jpg',
    'https://www.crushpixel.com/big-static12/preview4/banner-with-assortment-grain-products-1079376.jpg',
    'https://www.crushpixel.com/big-static18/preview4/lemons-citrus-fruits-lemon-banner-2912851.jpg',
]

const Slider = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={true}
                horizontal
                style={{ width }}>
                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            source={{uri: image}}
                            style={styles.SliderImage}
                        />
                        // console.log(image)
                    ))
                }
            </ScrollView>
            <Image style={[styles.Arrow, styles.Right]} source={Arrow}/>
            <Image style={[styles.Arrow, styles.Left]} source={Arrow}/>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    SliderImage: {
        marginTop: 30,
        resizeMode: 'cover',
        width: width,
        height: 150,
        backgroundColor: 'red',
    },
    Arrow: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 90,
    },
    Right: {
        right: 5,
    },
    Left: {
        transform: [
            { rotate: '180deg' }
        ],
        left: 5,
    }
})