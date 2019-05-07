import React from 'react';
import {
    View,
    StyleSheet,
} from "react-native";

export class NavBar extends React.Component {

    render() {
        return (
            <View style={styles.headerContainer}>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
  rightButton: {    
    width: 30,
    height: 18,
    backgroundColor: "#BED885"
  },

  headerContainer: {
    height: 90,
    //height: "10%",
    marginTop: 0,
    width: "100%",
    backgroundColor: "#ff9999",
    justifyContent: "center",
    alignItems: "center"
  },

  headerContainer2: {
    width: "96%",
    height: "100%",
    marginTop:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerText: {
      marginLeft:5,
    color: "white",
    fontSize: 20,
   // backgroundColor: "pink"
  },

  backBtn: {
    width: 30,
    height: 30,
   // backgroundColor: "black"
  },

  backBtnImage: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  }
});


