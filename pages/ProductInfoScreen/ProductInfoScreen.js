import { StyleSheet, Text, View } from 'react-native';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

export default function ProductScreen({ navigation, route}) 
{
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ProductInfo navigation={navigation} route ={route} />
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