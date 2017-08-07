import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow'
import HandSvg from './demo/HandSvg';
const OPACITY = 0.3

export default class SvgShadowPOC extends Component {
  render() {
    const textAreaShadow1 = {
      width: 330,
      height: 80,
      color: "#000",
      border: 30,
      radius: 6,
      opacity: OPACITY,
      x: 3,
      y: 3,

    }
    const textAreaShadow2 = {
      width: 330,
      height: 150,
      color: "#9b9b9b",
      border: 2,
      radius: 6,
      opacity: OPACITY,
      x: -2,
      y: 2,

    }
    return (
      <View style={styles.container}>
        <View style={{ height: 50 }} />


        <View style={{ elevation: 5, backgroundColor: 'white', flexDirection: 'row', alignItems: 'flex-end', borderRadius: 6 }}>
          <View style={{ width: 250, height: 80, backgroundColor: "#f5f5f5", borderColor: "#d9d9d9", borderWidth: 6, borderTopRightRadius: 0, borderBottomRightRadius: 0, }} />
          <View style={{ width: 80, height: 80, backgroundColor: "#00aeef", borderTopRightRadius: 6, borderBottomRightRadius: 6, }} />
        </View>

        <View style={{ height: 50 }} />
        

        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <View style={{elevation: 5, width: 250, height: 150, backgroundColor: "#f5f5f5", borderColor: "#d9d9d9", borderWidth: 6,  borderRadius: 6, borderBottomRightRadius: 0}} />
          <View style={{elevation: 5, width: 80, height: 80, backgroundColor: "#00aeef", borderTopRightRadius: 6, borderBottomRightRadius: 6}} />        
        </View>
        


          {/*<View style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'flex-end', borderRadius: 6 }}>
            <View style={{ elevation: 10, backgroundColor: 'white' }}>
              <View style={{ width: 250, height: 150, backgroundColor: "lightgreen", borderRadius: 6, borderTopRightRadius: 0, borderBottomRightRadius: 0, }} />
            </View>
            <View style={{ elevation: 10, backgroundColor: 'white' }}>            
              <View style={{ width: 80, height: 80, backgroundColor: "lightblue", borderTopRightRadius: 6, borderBottomRightRadius: 6, }} />
            </View>
        </View>*/}

        {/*<View style={{ height: 50 }} />
        <BoxShadow setting={textAreaShadow1}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <View style={{ width: 250, height: 80, backgroundColor: "lightgreen", borderRadius: 6, borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            <View>
              <View style={{ flex: 1, backgroundColor: "white" }} />
              <View style={{ width: 80, height: 80, backgroundColor: "lightblue", borderTopRightRadius: 6, borderBottomRightRadius: 6 }} />
            </View>
          </View>
        </BoxShadow>
        <View style={{ height: 50 }} />
        <BoxShadow setting={textAreaShadow2}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <View style={{ width: 250, height: 150, backgroundColor: "lightgreen", borderRadius: 6, borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            <View>
              <View style={{ flex: 1, backgroundColor: "white" }} />
              <View style={{ width: 80, height: 80, backgroundColor: "lightblue" }} />
            </View>
          </View>
        </BoxShadow>*/}
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