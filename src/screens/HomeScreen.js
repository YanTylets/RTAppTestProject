import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, Button } from 'react-native';
import MyButton from '../components/MyButton';
import { logoutUser } from '../api/auth-api';
import AppBar from '../components/AppBar';
import { useSelector} from "react-redux";

const Item = ({ title, img, onPress }) => (

    <View style={styles.item}>
        <TouchableOpacity onPress={onPress}>
            <Image 
                style={styles.image}
                source={{uri: `${img}`,}}
            />
        </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const HomeScreen = ({navigation}) => {
    
    const [selectedId, setSelectedId] = useState(null);
    const movies = useSelector(state => state.movieReducer.movies);
    const selectedFilm = (id) => {
        navigation.push('MovieScreen', id)
        setSelectedId(id)
    }

      const renderItem = ({ item }) => (
        <Item title={item.show.name} onPress={()=> selectedFilm(item.show.id)} img={item.show.image === null? 'https://image.freepik.com/free-vector/vintage-tv_23-2147503075.jpg': item.show.image.medium } />
      );

    return (
            <View >
            <AppBar isHomeScreen={true} />
                <FlatList
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={item => item.show.id}
                    numColumns={2}
                    style={styles.flatlist}
                />
            <Button 
                title='Logout'
                color='#34e1eb'
                onPress={() => {
                    logoutUser()
                }}
            />
            </View>
 

    );
};

const styles = StyleSheet.create ({
  container: {
      width:'100%',
      justifyContent:'center',
      alignItems: 'center'
  },
  flatlist: {
height: '89%',
padding:0
  },
  item: {
    flex:1/2,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems:'center'
  },
  image: {
    borderRadius: 10,
    width: 180,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
})

export default HomeScreen;