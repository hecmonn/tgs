import React, { PropTypes } from 'react';
import {Container,Content,Button,Text,Icon,Header,Left} from 'native-base';
class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render () {
        const {navigation}=this.props;
        return (
            <Container>
                <Content>
                    <Header>
                        <Left>
                            <Button onPress={()=>{navigation.goBack()}} transparent>
                                <Icon name="ios-arrow-back" />
                            </Button>
                        </Left>
                    </Header>
                    <Text>Settings</Text>
                </Content>
            </Container>
        )
    }
}

export default Settings;
