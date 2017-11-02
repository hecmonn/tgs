import {StackNavigator} from 'react-navigation';
import RootNavigator from './RootNavigator';
import Settings from './Profile/Settings'
const MainNavigator=StackNavigator({
    Root: {
        screen: RootNavigator
    },
    Settings:{
        screen: Settings
    }
},{
    navigationOptions:{
        header:null,
        backgroundColor: 'transparent'
    }
});

export default MainNavigator;
