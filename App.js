import React, { Component } from 'react';
import { View, Text,Animated, Easing } from 'react-native';

export default class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
    };
    this.spinValue = new Animated.Value(0)
    this.size=new Animated.Value(58)
    this.rotate=new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    // this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver:false
      }
    ).start(() => this.spin())
    // Animated.timing(
    //   this.rotate,{
    //     toValue:1,
    //     duration:1000
    //   }
    // )

  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 0.5,1],
      outputRange: ['0deg', '-90deg', '-180deg']
    })
    const scale = this.spinValue.interpolate({
      inputRange: [0, 0.5,1],
      outputRange: [1,20,1]
    })
    const rotate =this.rotate.x
    const width=this.size
    return (
      <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
      <Animated.View style={{backgroundColor:'green',width:100,height:100,borderRadius:100,alignContent:'center', transform:[{rotateY:spin},{scale:scale}]}}>
      <Text style={{width:100,height:100,textAlignVertical:'center',textAlign:'center'}}> Hello</Text>
      </Animated.View>
      </View>
    );
  }
}
