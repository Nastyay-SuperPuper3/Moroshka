import { StyleSheet, Text, View } from 'react-native';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header';

export default function CategoryScreen({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <CategoryList/>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 100
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
