import { StyleSheet, Text, View } from 'react-native';

export default function Search() {

  return (
    <View style={styles.container}>
      <Text>Ты в поиске, детка!</Text>
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
