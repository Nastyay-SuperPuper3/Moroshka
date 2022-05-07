import { StyleSheet, Text, View } from 'react-native';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';

export default function ProductScreen({ navigation, route}) 
{
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ProductList navigation={navigation} route ={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})