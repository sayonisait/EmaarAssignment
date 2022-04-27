import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const UserDetail = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item?.id })}>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: item.picture.medium }} />
                <View>
                    <Text style={styles.name}>{`${item.name.first} ${item.name.last}`}</Text>
                    <Text style={styles.location}>{`${item.location.country} `}</Text>

                </View>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    root: {
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 5
    },
    image: {
        width: 50,
        aspectRatio: 1,
        margin: 10,
        borderRadius: 100,
        marginBottom: 5,
        // borderWidth:.5

    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    location: {
        fontSize: 12,
    },
    rating: {
        // marginLeft:10
    }
});


export default UserDetail;