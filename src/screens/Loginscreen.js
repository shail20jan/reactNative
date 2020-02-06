import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import Navlink from '../components/Navlink';

const Login = ({ navigation }) => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground source={require('../../assets/love-image.jpg')} style={styles.background}>
                    <Text h3 style={styles.heading}>Welcome to Laddu App!</Text>
                </ImageBackground>
            </View>
            <Spacer />
            <View style={styles.bottom}>
                <Input
                    label="Mobile"
                    placeholder="Mobile"
                    value={mobile}
                    onChangeText={(newMobile) => setMobile(newMobile)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType='tel'
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    value={password}
                    onChangeText={(newPass) => setPassword(newPass)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer />
                <Button
                    title={`Log in`}
                    onPress={() => navigation.navigate('Dashboard')}
                />
                <Text style={{marginBottom: 2}}></Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text>Don't have an account? Go bac to sign up?</Text>    
                    <Navlink text="Sign Up" routeName="SignUp"></Navlink> 
                </View>
            </View>
        </View>
    )
};

Login.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        flex: 1,
        margin: 10
    },
    background: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    heading: {
        color: '#ff0000'
    },
    spacer:{
        flex:1,
        flexDirection:'row'
    }
});

export default Login;
