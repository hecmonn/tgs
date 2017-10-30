import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../actions/users';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  componentWillMount() {
    this.props.getUsers();
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header style={{backgroundColor:'transparent'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
            <Right />
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}

let mapStateToProps=state=>{
  return{
    users:state.users
  }
}
export default connect(mapStateToProps,{getUsers})(Home);
