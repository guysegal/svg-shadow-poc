import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BoxShadow} from 'react-native-shadow'

const OPACITY = 0.3

export default class SvgShadowPOC extends Component {
  render() {
    const textAreaShadow1 = {
        width:330,
        height:80,
        color:"#9b9b9b",
        border:2,
        radius:6, 
        opacity:OPACITY ,
        x:-2,
        y:2,
       
    }
    const textAreaShadow2 = {
        width:330, 
        height:150,
        color:"#9b9b9b",
        border:2,
        radius:6, 
        opacity:OPACITY ,
        x:-2,
        y:2,
       
    }    
    return (
      <View style={styles.container}>      
          <View>           
            <BoxShadow setting={textAreaShadow1}>   
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <View style={{width: 250, height: 80, backgroundColor: "lightgreen", borderRadius: 6, borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />                                                     
                <View>
                  <View style={{flex: 1, backgroundColor: "white"}} />            
                  <View style={{width: 80, height: 80, backgroundColor: "lightblue", borderTopRightRadius: 6, borderBottomRightRadius: 6 }} />            
                </View>
            </View>                       
          </BoxShadow>
        </View>
        <View style={{height:100}} />
          <View>           
            <BoxShadow setting={textAreaShadow2}>   
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <View style={{width: 250, height: 150, backgroundColor: "lightgreen", borderRadius: 6, borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />                                                     
                <View>
                  <View style={{flex: 1, backgroundColor: "white"}} />            
                  <View style={{width: 80, height: 80, backgroundColor: "lightblue", borderTopRightRadius: 6, borderBottomRightRadius: 6 }} />                      
                </View>
            </View>                       
          </BoxShadow>
        </View>                  
      <View/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});