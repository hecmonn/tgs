import React, { PropTypes } from 'react';
import {Image,View,Dimensions,StyleSheet} from 'react-native';
import {Text,Content,Container,H1} from 'native-base';
import Car from 'react-native-looped-carousel';
var styles = StyleSheet.create({
    container: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            entries:[
                'http://localhost:3030/TourImages/1/1.jpg',
                'http://localhost:3030/TourImages/1/2.jpg',
                'http://localhost:3030/TourImages/1/3.jpg'
            ],
            size: Dimensions.get('window').width
        }
    }
    _renderItem ({item, index}) {
        return (
            <Container style={{height:200,backgroundColor:'yellow'}}>
                <Content>
                    <Image source={{uri: item}} style={{width:'100%',height:200}} />
                    <Text style={{flex:1}}>filling contentfilling contentfilling contentfilling content</Text>
                </Content>
            </Container>
        );
    }

    render () {
        const {entries,screenWidth}=this.state
        return (
            <H1>Tour Carousel</H1>
        );
    }
}

export default Carousel;
