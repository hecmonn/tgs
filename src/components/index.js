import React, { PropTypes } from 'react'
import {Container} from 'native-base';
import {StackNavigator} from 'react-navigation';
import Home from './Home';


const RootNavigator=StackNavigator({
    Home: {
        screen: Home,
        headerTitle:'Home'
    }
})

export default RootNavigator;
