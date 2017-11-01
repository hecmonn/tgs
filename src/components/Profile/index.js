import React, { PropTypes } from 'react'
import {Container,Content,Text,H1,Header,Button,Icon} from 'native-base'
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render () {
        const {navigation}=this.props;
        return(
            <Container style={{flex:1,backgroundColor:'transparent'}}>
                <Content style={{flex:1}}>
                    <H1>Profile</H1>
                    <Button onPress={()=>navigation.navigate('Settings')}><Icon name="settings" /></Button>
                </Content>
            </Container>
        )
    }
}

export default Profile;
