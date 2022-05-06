import { StyleSheet, Text, View } from 'react-native';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';

export default function CategoryScreen({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <CategoryList navigation={navigation} />
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
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  slider: {
    flex: 1
  }

});
