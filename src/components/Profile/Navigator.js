import {StackNavigator} from 'react-navigation';
import Profile from '.';
import Settings from './Settings'
const ProfileNavigator=StackNavigator({
    Profile:{
        screen: Profile
    },
    Settings: {
        screen:Settings
    }
});

export default ProfileNavigator;
