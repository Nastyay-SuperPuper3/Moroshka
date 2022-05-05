import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../../assets/header/logo.png'
import search from '../../assets/header/search.png'

export default function Header(props) {
  const openSearch = () => {
    props.navigation.navigate('Search')
  }

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.headerImg} />
        <View>
          <Text style={styles.headerText}>Морошка</Text>
          <Text style={styles.headerSubtext}>Магазин продуктов</Text>
        </View>
      </View>
      <Image 
        style={styles.headerSearch} 
        source={search} 
        onTouchEnd={openSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#25A006',
    borderBottomColor: '#dedede',
    borderBottomWidth: 2,
    paddingTop: 50,
    paddingBottom: 10,
    padding: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  headerSubtext: {
    color: '#fff',
    fontSize: 11.5,
  },
  headerImg: {
    width: 58,
    height: 45,
    marginRight: 5,
  },
  headerSearch: {
    width: 28,
    height: 28,
    marginRight: 5,
  }
});
