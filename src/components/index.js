import {StackNavigator} from 'react-navigation';
import RootNavigator from './RootNavigator';
import Settings from './Profile/Settings';
import Tour from './Home/Tours/Tour';
const MainNavigator=StackNavigator({
    Root: {
        screen: RootNavigator
    },
    Settings:{
        screen: Settings
    },
    Tour:{
        screen: Tour
    }
},{
    navigationOptions:{
        header:null,
        style:{
            backgroundColor: 'white'
        },
        cardStyle:{
            backgroundColor: 'yellow'
        },
        backgroundColor: 'blue'
    }
});

export default MainNavigator;
