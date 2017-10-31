import React, { PropTypes } from 'react';
import {Image} from 'react-native';
import cn from 'classnames';
import {Card,CardItem,Content,Text,Icon,Right,Left,Body,Button,H2} from 'native-base';
class TourCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            booked_db:true,
            saved_db:false
        }
    }
    render () {
        const {cntry_code,city_code,name,description}=this.props.info;
        const{booked_db,saved_db}=this.state;
        const booked=booked_db?{icon:'ios-calendar',title:'Booked'}:{icon:'ios-calendar-outline',title:'Book'}
        const saved=saved_db?{icon:'ios-bookmark',title:'Saved'}:{icon:'ios-bookmark-outline',title:'Save'}
        return(
            <Content>
                <Card style={{flex:0}}>
                    <CardItem>
                        <Body>
                            <H2>{name}</H2>
                            <Text note>{city_code},{cntry_code}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{uri:'https://i2.wp.com/www.dondeir.com/wp-content/uploads/2017/04/gran-festival-para-ninas-y-ninos-de-la-cdmx-en-zocalo-04.jpg'}} style={{height: 250, borderRadius: 5, width: '100%', flex: 1}} />
                            <Text>{description}</Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{paddingTop:0}}>
                        <Left />
                        <Body>
                            <Button transparent>
                                <Icon name="ios-calendar-outline" />
                                <Text note>Book</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name={saved.icon} />
                                <Text note>{saved.title}</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

export default TourCard;
