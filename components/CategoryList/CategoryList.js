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
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 4,
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 5,
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 6,
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 7,
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 8,
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 9,
        title: 'Мясо',
        img: Cucumber
    },
    {
        id: 9,
        title: 'Мясо',
        img: Cucumber
    },
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
        <View>
            <Text>{data.title}</Text>
        </View>
    )
}


export default function CategoryList() {

    const RenderItem = ({item}) => {
        return (
            <CategoryItem data={item}/>
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryItem: {
        backgroundColor: 'red',
        margin: 10,
    }
});
