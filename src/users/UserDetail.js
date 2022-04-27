import React, { useEffect } from 'react'
import Moment from 'moment';
import { View, Text, Image, StyleSheet } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';


const UserDetail = ({ route }) => {
    const { item } = route.params;

    const CustomFallback = () => (
        <View>
            <Text>Something happened!</Text>
        </View>
    )

    return (
        <ErrorBoundary FallbackComponent={CustomFallback}>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: item.picture.large }} />
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.name}>{`${item.name.first} ${item.name.last}`}</Text>
                    <Text style={styles.location}>{`${item.location.city} , ${item.location.country} `}</Text>

                </View>
                <View style={styles.line} />

                <View style={{
                    marginHorizontal: 10, paddingHorizontal: 15
                }}>

                    <Text style={styles.location}>{`Email : ${item.email} `}</Text>
                    <Text style={styles.location}>{`Phone : ${item.phone} `}</Text>
                    <Text numberOfLines={3} style={styles.location}>{`Address : ${item.location.street?.number}, ${item.location.street?.name}, ${item.location.city},  ${item.location.state} `}</Text>
                    <Text style={styles.location}>{`DOB : ${getDateFromServerString(item.dob.date)} `}</Text>
                    <Text style={styles.location}>{`Age : ${item.dob.age} `}</Text>


                </View>
                <View style={styles.line} />

            </View>
        </ErrorBoundary>

    );
}

getDateFromServerString = (dateString) => {
    Moment.locale('en');
    return Moment(new Date(dateString).toISOString().substring(0, 10)).format('DD MMM yyyy')
}



const styles = StyleSheet.create({

    root: {
        margin: 15,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 5,
        flex: 1
    },
    image: {
        width: 200,
        aspectRatio: 1,
        margin: 10,
        borderRadius: 100,
        marginBottom: 5,
        // borderWidth:.5

    },
    name: {
        marginTop: 10,
        fontSize: 20,
        // fontWeight: 'bold'
    },
    location: {
        fontSize: 14,
        marginBottom: 10,
    },
    rating: {
        // marginLeft:10
    },

    separator: {
        height: 10,
        flex: 1

    },
    line: {
        alignSelf: 'stretch', marginHorizontal: 10, marginTop: 10,
        borderTopWidth: StyleSheet.hairlineWidth, padding: 10
    }
});


export default UserDetail;