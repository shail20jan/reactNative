import React from 'react';
import { Text, View, Button } from 'react-native';
import Header from '../components/Header';

const Dashboardscreen = () => (
    <View>
        <Text>Dashboardscreen</Text>
    </View>
);

Dashboardscreen.navigationOptions = () => {
    return {
        headerTitle: () => <Header />,
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    }
}

export default Dashboardscreen;
