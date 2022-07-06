import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    DevSettings,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        color: 'gray',
        textAlign: 'center'
    },
    terms_conditions_button: {
        marginTop: 10,
    },
    terms_conditions_text: {
        //   color: theme.$deliveryTextBlueColor,
        fontSize: '0.9rem',
        textDecorationLine: 'underline',
        //   fontFamily: theme.$mediumFont
    },

    buttonStyle: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
         width: 200,
        backgroundColor:'#007DB6',
        padding:10
    },
    buttonText:{
        color:'#ffffff',
        fontWeight:'bold'
    }
});

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.content}>

                        <Text style={{ fontSize: 20, fontWeight:'bold' }}>Oops, Something Went Wrong</Text>
                        <Text style={{ marginVertical: 10, lineHeight: 23, fontWeight: '500', }}>
                            The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app. Please contact us if this issue persists.
                        </Text>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={styles.buttonText}
                                onPress={this.handleReload}
                               
                            >RELOAD</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        }
        return this.props.children
    }

    handleReload=()=>{
        DevSettings.reload()

    }


}

export default ErrorBoundary;