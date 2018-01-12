/*
 * @Author: zhouJun 
 * @Date: 2018-01-12 18:00:22 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-01-12 18:28:11
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Picture extends Component {
  render(){
    return (
      <Image source={this.props.pic} style={{width:193,height:110}}/>      
    )
  }
}
class Greeting extends Component {
  render(){
    return (
      <Text style={this.props.style}>{this.props.value}</Text>
    )
  }
}
class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {
      showText:true
    }
    setInterval(()=>{
      this.setState(state=>{
        return {showText:!state.showText} 
      })
    },1000)
  }
  render(){
    let display = this.state.showText?this.props.text:' ';
    return (
      <Text>{display}</Text>
    )
  }
}
export default class MyApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let textValue = 'hello react-native'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome zhoujun!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Blink text="Look at me"/>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Greeting style={styles.instructions} value={textValue}/>
        <Picture pic={pic} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#090',    
    margin: 10,
    opacity:0.5,
  },
  instructions: {
    textAlign: 'center',
    color: '#909',
    marginBottom: 5,
  },
});
