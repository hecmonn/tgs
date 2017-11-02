import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Item,Input,H2 } from 'native-base';

import Tours from './Tours';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    const {navigation}=this.props;
    return (
      <Container style={{flex:1,backgroundColor:'transparent'}}>
        <Header searchBar style={{backgroundColor:'transparent'}} transparent noShadow>
          <Item style={{flex:1,backgroundColor:'transparent'}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
        <Body style={{flex:1,width:'100%'}}>
          <Title>Tours near: Mexico City</Title>
          <Tours style={{flex:1}} />
        </Body>
      </Container>
    );
  }
}


export default Home;
