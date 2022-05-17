
import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserListItem from './UserListItem';
import { fetchUsers } from './usersSlice';


const UserListScreen = ({ navigation }) => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <View style={styles.root} >
            {users.fetching ? <ActivityIndicator /> :
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={users.data}
                    keyExtractor={(result) => result.login.uuid}
                    renderItem={({ item }) =>
                        <UserListItem item={item}></UserListItem>
                    }
                    ListEmptyComponent={<Text style={{ alignSelf: 'center', padding: 10 }}>Something went wrong</Text>}
                ></FlatList>}



        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        marginLeft: 10,

    }

});

export default UserListScreen;