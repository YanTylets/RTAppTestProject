import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import AppBar from '../components/AppBar';
import { useSelector} from "react-redux";



const MovieScreen = ({navigation, route}) => {
    const back = navigation.goBack;
    const movieId = route.params;
    const movies = useSelector(state => state.movieReducer.movies);
    const movie = movies.filter(i => i.show.id === movieId);
    const name = movie[0].show.name.toUpperCase();
    const imageUrl = movie[0].show.image.original;
    const summary =  movie[0].show.summary;

    


    return (
        <View style={styles.container}>
            <AppBar 
                isHomeScreen={false} 
                back={back}
                movieName={name}
            />
            <SafeAreaView style={styles.container2}>
            <ScrollView contentContainerStyle={styles.wrapper} >
                <Image 
                    style={styles.image}
                    source={{uri: imageUrl}}
                />
                <Text style ={styles.name}> 
                    {name} 
                </Text>
                <Text style ={styles.summary}> 
                    {summary} 
                </Text>
            </ScrollView>
            </SafeAreaView>
        </View>

    );
};

const styles = StyleSheet.create ({
    container: {
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    container2: {
        flex:1,
        marginHorizontal: 20,
    },
    wrapper: {
        width:'100%',
        justifyContent:'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 250,
        height: 350,
        borderRadius: 20
    },
    name :{
        marginTop: 40,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    summary :{
        fontSize: 20,

    }
})

export default MovieScreen;