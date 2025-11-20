// hub para chamar todos os menus, tela inicial com os menus
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, SafeAreaViewBase} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../navigation/DrawerNavigator'
import StackNavigator from '../navigation/StackNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';


const HomeScreen = ({navigation}) => {
    
    return(
        <SafeAreaView>
            <View>
                <Text>Menu Principal</Text>
                <Text>Escolha o tipo de navegação:</Text>
                
                {/* botões de cada menu */}
                <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}>
                    <Text>Drawer Navigator</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('StackNavigator')}>
                    <Text>Stack Navigator</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigator')}>
                    <Text>Bottom Tab Navigator</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// identifica os menus
const RootStack = createStackNavigator();

// Componente que mostra os menus 
const RootNavigator = () => {
    return(
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <RootStack.Screen name='Home' component={HomeScreen}/>
            <RootStack.Screen name='DrawerNavigator' component={DrawerNavigator}/>
            <RootStack.Screen name='StackNavigator' component={StackNavigator}/>
            <RootStack.Screen name='BottomTabNavigator' component={BottomTabNavigator}/>

        </RootStack.Navigator>
    )
}

export default RootNavigator;
