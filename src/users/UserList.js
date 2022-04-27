
import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserDetail from './UserDetail';
import { fetchUsers } from './usersSlice';


const UserListScreen = ({ navigation }) => {
    const users = useSelector(state => state.users.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <View style={styles.root} >
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={users}
                keyExtractor={(result) => result.login.uuid}
                renderItem={({ item }) =>
                    <UserDetail item={item}></UserDetail>
                }
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        marginLeft: 10,

    }

});

export default UserListScreen;