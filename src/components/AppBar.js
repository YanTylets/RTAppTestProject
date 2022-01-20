import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, TextInput, View, StatusBar} from 'react-native';
import { fetchMovies } from '../store/movieReducer';
import {useDispatch} from "react-redux";



const AppBar = ({isHomeScreen, back, movieName}) => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const queryAPI = `https://api.tvmaze.com/search/shows?q=${query.toLowerCase()}`

    return (
        <Appbar.Header style={styles.container}>
                    <StatusBar
        backgroundColor="#34e1eb"
        barStyle="light-content"
       />
            { isHomeScreen
            ? 
                <View style={styles.home__bar__container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Search...'
                        value={query}
                        onChangeText={(text) => setQuery(text)}
                    />
                    <Appbar.Action 
                        style={styles.search} 
                        icon="magnify" 
                        onPress={() => {dispatch(fetchMovies(queryAPI))}}
                        size={28}
                        color='white'
                    />
                </View> 
            :
                <View style={styles.movie__bar__container}>
                    <Appbar.BackAction
                        style={styles.button}
                        onPress={()=> {
                            {back()}
                        }}
                        color='white'
                        size={35}
                    />
                    <Appbar.Content
                        style={styles.film__name}
                        title={movieName} 
                        color="white"
                    />
                </View>
            }
        </Appbar.Header>

    );
};

const styles = StyleSheet.create({
    container: {
    height: 35,
      alignItems: "center",
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#34e1eb'
    },
    home__bar__container :{
        alignItems: "center",
        width: '100%',
        justifyContent: 'center',
        padding: 0,
        margin: 0
    },
    movie__bar__container: {
        margin:0,
        padding:0,
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        marginBottom: 20,
        marginLeft:0,
        marginRight:0,
        borderColor: '#34e1eb',
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
        height: 44,
        flexDirection: 'row',
        backgroundColor: '#F0F8FF',
        fontSize:20,
        position: 'relative'
    },
    search: {
        backgroundColor:'black',
        position: 'absolute',
        top: -19.5,
        right: 14
    },
    button: {
        width:60,
        height: 60,
        marginBottom: 40
    }, 
    film__name: {
        height: 60,
    }

  })

export default AppBar;