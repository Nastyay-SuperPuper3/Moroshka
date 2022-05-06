import { StyleSheet, Text, View } from 'react-native';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';

export default function ProductScreen({ navigation
 }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Search />
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