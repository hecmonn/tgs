import React, { PropTypes } from 'react';
import {Image} from 'react-native';
import {Content,Header,Text,Button,Left,Right,Body,Icon,Footer,FooterTab} from 'native-base';
import Carousel from './Carousel';

class Tour extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render () {
        const {navigation}=this.props;
        return(
            <Content>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>{navigation.goBack()}}>
                            <Icon
                                name="arrow-back"
                                style={{color:'#464646'}}
                            />
                        </Button>
                    </Left>
                </Header>
                <Body>
                    <Text>Tour description</Text>
                    <Carousel />
                </Body>
                <Footer>
                    <FooterTab>
                        <Left>
                            <Text style={{color:'#464646',fontWeight:'bold',marginLeft:30}}>$20USD</Text>
                        </Left>
                        <Right>
                            <Button style={{backgroundColor:'#20b418',marginRight:30}}>
                                    <Icon
                                        name="calendar"
                                        style={{color:'white'}}
                                    />
                                    <Text style={{color:'white',fontWeight:'bold'}}>Book</Text>
                            </Button>
                        </Right>
                    </FooterTab>
                </Footer>
            </Content>
        )
    }
}

export default Tour;
