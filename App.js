import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity, Button } from 'react-native';

class Botao extends Component {

   
  constructor(props) {
    super(props);
    this.state = {};
  
    let c = 1;
    if(props.c) {
      c= parseInt(props.c);
    }
    let bg = '#333';
    if(props.bg) {
      bg = props.bg;
    }
     
    this.styles = StyleSheet.create({
      area: {
        flex:c,
        justifyContent:'center',
        borderRadius:70, 
        alignItems:'center',
        borderWidth:1,
        margin:5,
        borderColor:'#424242', 

        backgroundColor:bg
      },
      text: { 
        color:'#eee',
        fontSize:30,
        fontWeight:'bold', 
      }
    });
  }
   
  render() {
      return(
        <TouchableOpacity style={this.styles.area} onPress= {this.props.onPress}>
          <Text style={this.styles.text} >{this.props.n}</Text>
        </TouchableOpacity>
      );
  } 
}  
export default class calculadora extends Component {

  constructor(props) {
    super(props);
    this.state = {r:'0'};
  }
  btn(b) {  
    let s = this.state;

    if (b == 'C') { 
      s.r ='0';
    }else if (b == '=') {
      s.r = eval (s.r) ; 
    }else {
      if(s.r =='0') {  
        s.r = b;  
      }else {
        s.r += b;  
      }
    }
    this.setState(s);
  }
    render() {
      return( 
          <View style ={styles.container} > 
            <View style ={styles.linhaRes} >
              <Text style ={styles.res}>{this.state.r}</Text>
            </View>
            <View style ={styles.linha} >  
              <Botao c="3" n ="C" bg = "#b0b0b0" onPress={()=>{this.btn("C")}}/>
              
              <Botao n ="/" bg = "#FD9536" onPress={()=>{this.btn("/")}}/>  
            </View>
            <View style ={styles.linha} > 
              <Botao n ="7" onPress={()=>{this.btn("7")}}/>
              <Botao n ="8" onPress={()=>{this.btn("8")}} />
              <Botao n ="9" onPress={()=>{this.btn("9")}}/>
              <Botao n ="*" bg = "#FD9536" onPress={()=>{this.btn("*")}}/>
            </View>
            <View style ={styles.linha} > 
              <Botao n ="4" onPress={()=>{this.btn("4")}}/>
              <Botao n ="5" onPress={()=>{this.btn("5")}} />
              <Botao n ="6" onPress={()=>{this.btn("6")}}/>
              <Botao n ="-" bg = "#FD9536" onPress={()=>{this.btn("-")}}/>
            </View>
            <View style ={styles.linha} > 
              <Botao  n ="1" onPress={()=>{this.btn("1C")}}/>
              <Botao  n ="2" onPress={()=>{this.btn("2")}}/>
              <Botao  n ="3" onPress={()=>{this.btn("3")}}/> 
              <Botao  n ="+" bg = "#FD9536" onPress={()=>{this.btn("+")}}/> 
            </View>
            <View style ={styles.linha} > 
              <Botao c="2" n = "0"onPress={()=>{this.btn("0")}} />
              <Botao n ="."   onPress={()=>{this.btn(".")}}/>
              <Botao  n ="=" bg = "#FD9536" onPress={()=>{this.btn("=")}}/> 
            </View>
          </View>
      );
    } 
  }
    

const styles = StyleSheet.create({
  container: { 
    backgroundColor:"#000",
    paddingTop:20, 
    flex:1, 
  },
  linha: {
    flex:1,
    flexDirection:'row', 
    margin:10
     

  },
  linhaRes: {
    flex:1
  },
  res: { 
    backgroundColor:'#000', 
    color:'#fff',
    fontSize:50,  
    flex:1,
    textAlign:'right', 
  }
});
