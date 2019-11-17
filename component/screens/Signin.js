import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux'

class Signin extends Component {
    render() {
      return (
        <View>
          <Text>Signin</Text>
          <Text>{this.props.name}</Text>
        </View>
      );
    }
  }
function mapStateToProps(state){
    return({
        name: state.auth.name
    })
}
function mapDispatchToProps(dispatch){
    return({
        
    })
}
  export default connect(mapStateToProps, mapDispatchToProps)(Signin);