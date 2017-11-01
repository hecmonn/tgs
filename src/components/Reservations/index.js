import React, { PropTypes } from 'react';
import {Content,Text,Container,Header} from 'native-base';
class Reservations extends React.Component {
    render () {
        return(
            <Container>
                <Content>
                    <Header style={{backgroundColor:'transparent'}} />
                    <Text>Reservations</Text>
                </Content>
            </Container>
        )
    }
}

export default Reservations;
