import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header';

export default function CategoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text>Просто текст</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
