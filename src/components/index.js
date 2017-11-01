import React, { PropTypes } from 'react'
import {Container} from 'native-base';
import {TabNavigator} from 'react-navigation';
import {Icon,Text} from 'native-base';
import Home from './Home';
import Profile from './Profile';
import Reservations from './Reservations';

const RootNavigator=TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon: ({tintColor,focused}) => (
                <Icon
                    name={focused?'ios-home':'ios-home-outline'}
                    style={{color:'#464646'}}
                    size={16}
                />
            )
        }
    },
    Reservations:{
        screen: Reservations,
        navigationOptions:{
            tabBarLabel: 'Reservations',
            tabBarIcon: ({tintColor,focused}) => (
                <Icon
                    name={focused?'ios-calendar':'ios-calendar-outline'}
                    style={{color: '#464646'}}
                    size={16}
                />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions:{
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor,focused}) => (
                <Icon
                    name={focused?'ios-person':'ios-person-outline'}
                    style={{color: '#464646'}}
                    size={16}
                />
            )
        }
    },

})

export default RootNavigator;
