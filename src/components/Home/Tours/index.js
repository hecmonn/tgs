import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {getTours} from '../../../actions/tours';
import {H1,Container,Body,Content,Spinner,Text} from 'native-base';
import TourCard from './TourCard';
class Tours extends React.Component {
    constructor(props){
      super(props);
      this.state={
        loading :false
      }
    }
    emptyTours=(
      <H1>No tours</H1>
    )
    tourCards=()=>(
      <Content style={{flex:1, width: '100%'}}>
        {this.props.tours.map(r=><TourCard info={r} key={r.id}/>)}
      </Content>
    )

    componentWillMount() {
      this.setState({loading:true});
      this.props.getTours()
      .then(this.setState({loading:false}));
    }
    render() {
      const {loading}=this.state;
      console.log(loading);
      let toursRender=this.props.tours.length>0?this.tourCards():this.emptyTours;
      return(
        <Container style={{width:'100%'}}>
            { loading? <Spinner />:toursRender}
        </Container>
      )
    }
}

let mapStateToProps=state=>{
  return{
    tours: state.tours
  }
}

export default connect(mapStateToProps,{getTours})(Tours);
