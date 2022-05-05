import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import Cucumber from '../../assets/category/cucumber.png'





const DATA = [
    {
        id: 1,
        title: 'Овощи',
        img: Cucumber
    },
    {
        id: 2,
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 3,
        title: 'Молочко',
        img: Cucumber
    },
    {
        id: 4,
        title: 'Яйца',
        img: Cucumber
    },
    {
        id: 5,
        title: 'Сыр',
        img: Cucumber
    },
    {
        id: 6,
        title: 'Выпечка',
        img: Cucumber
    },
    {
        id: 7,
        title: 'Сладости',
        img: Cucumber
    },
    {
        id: 8,
        title: 'Фрукты',
        img: Cucumber
    },
    {
        id: 9,
        title: 'Рыба',
        img: Cucumber
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

const CategoryItem = ({ data }) => {
    return (
        <View style={styles.categoryItem}>
            <Text style={styles.categoryTitle}>{data.title}</Text>
            <Image style={styles.categoryImg} source={data.img} />
        </View>
    )
}


export default function CategoryList() {

    const RenderItem = ({ item }) => {
        return (
            <CategoryItem data={item} />
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={RenderItem}
                keyExtractor={item => item.id}

            />
        </SafeAreaView>
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
    }
});
