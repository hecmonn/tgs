import React, { PropTypes } from 'react'
import {Container,Content,Text,Button,H1,Header} from 'native-base'
class Profile extends React.Component {
    render () {
        return(
            <Container style={{flex:1}}>
                <Content style={{flex:1}}>
                    <Header style={{backgroundColor:'transparent'}} />
                    <H1>Profile</H1>
                </Content>
            </Container>
        )
    }
}

export default Profile;
