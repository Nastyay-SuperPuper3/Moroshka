import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import Cucumber from '../../assets/category/cucumber.png'
import Bread from '../../assets/category/bread.png'
import Bakery from '../../assets/category/bakery.png'
import Cheese from '../../assets/category/cheese.png'
import Eggs from '../../assets/category/eggs.png'
import Fish from '../../assets/category/fish.png'
import Fruits from '../../assets/category/fruits.png'
import Meat from '../../assets/category/meat.png'
import Milk from '../../assets/category/milk.png'
import Slider from '../Slider/Slider';





const DATA = [
    {
        id: 1,
        title: 'Овощи',
        img: Cucumber
    },
    {
        id: 2,
        title: 'Мясо',
        img: Meat
    },
    {
        id: 3,
        title: 'Молочко',
        img: Milk
    },
    {
        id: 4,
        title: 'Яйца',
        img: Eggs
    },
    {
        id: 5,
        title: 'Сыр',
        img: Cheese
    },
    {
        id: 6,
        title: 'Выпечка',
        img: Bread
    },
    {
        id: 7,
        title: 'Сладости',
        img: Bakery
    },
    {
        id: 8,
        title: 'Фрукты',
        img: Fruits
    },
    {
        id: 9,
        title: 'Рыба',
        img: Fish
    }
]



// const CategoriesOutput = () => {
//     return Categories.map((item) => {
//         return (
//             <View style={styles.categoryItem} key={item.id}>
//                 <Text>{item.title}</Text>
//                 <Text>{item.id}</Text>
//                 <Image source={item.img}/>
//             </View>
//         )
//     })
// }




export default function CategoryList(props) {

    const RenderItem = ({ item }) => {
        return (
            <CategoryItem data={item} />
        )
    }

    const productTypeScreen = (data) => {
        props.navigation.navigate('Product')
    }

    const CategoryItem = ({ data }) => {
        return (
            <TouchableHighlight onPress={() => { productTypeScreen(data) }} underlayColor="#F1F1F1" >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>{data.title}</Text>
                    <Image style={styles.categoryImg} source={data.img} />
                </View>
            </TouchableHighlight>

        )
    }

    return (
        <FlatList
            style={styles.flatlist}
            data={DATA}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
                <Slider />
            )}
        />
    );
}


const styles = StyleSheet.create({
    categoryItem: {

        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 20,
        paddingLeft: 40,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 0
        }
    },
    categoryImg: {
        resizeMode: "cover",
        width: 100,
        height: 100,
    },
    categoryTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: '#212121'
    },
});
