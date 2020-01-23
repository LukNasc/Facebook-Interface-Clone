import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import Main from './pages/Main';
import Group from './pages/Group';
import Store from './pages/Store';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import Options from './pages/Options';

const Routes = createAppContainer(createMaterialTopTabNavigator({
    Main:{
        screen: Main,
        navigationOptions:{
            tabBarIcon:({tintColor}) => <MaterialIcon name="home"  size={25} color={tintColor}/>,
        }
    },
    Group:{
        screen: Group,
        navigationOptions:{
            tabBarIcon:( { tintColor } ) =>  <FontAwesome name="users" size={20} color={tintColor} />
        }
    },
    Store:{
        screen: Store,
        navigationOptions:{
            tabBarIcon:( { tintColor } ) => <FontAwesome name="store" size={20} color={tintColor} />
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
            tabBarIcon:({tintColor}) => <FontAwesome name="user-alt" size={20} color={tintColor} />
        }
    },
    Notification:{
        screen: Notification,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => <FontAwesome name="bell" size={20} color={tintColor} />
        }
    },
    Options:{
        screen: Options,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => <FontAwesome name="bars" size={20} color={tintColor} /> 
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: '#1778f2',
        inactiveTintColor: '#777',
        activeBackgroundColor: '#777',
        pressColor: '#777',
        indicatorStyle:{
            backgroundColor: '#1778f2'
        },
        style:{
            backgroundColor: "#fff",
            elevation: 0,
            height: 50,
            justifyContent: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth:1
        }

    },
    swipeEnabled: true
}));

export default Routes;