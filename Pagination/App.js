import React from 'react';
import {ActivityIndicator,FlatList,StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {

data = []

state = {
  dataSource : [],
  isLoading : false,
}

componentDidMount = () => {
 this.getDataAndUpdateState()
}

 async getDataAndUpdateState() {

  if (this.data.length == 50) {
    return
  }
  this.setState({ isLoading: true });
  let newData = await this.getData();
  this.data.push(...newData)
  this.setState({
    dataSource: this.data,
    isLoading: false
  });
}


  renderItem = ({ item ,index}) => (
 
    <View style = {styles.listItem}>
      <Text style = {styles.textStyle}>{item.name}</Text>
    </View>
  );

  getData = () => {

    return new Promise((resolve, reject) => {
     
      let currentData = []
      for (let i = this.data.length + 1; i <= this.data.length + 10; i++) {
        let entry = {
          id: i,
          name: "Name:" + i
        }
        currentData.push(entry)
      }
      resolve(currentData) 
    })
 
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.isLoading ? <ActivityIndicator size = "large" color="blue" animating/> : 
       <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item,index)=>{
            return item.id.toString()
          }}
          ItemSeparatorComponent= {() => <View style = {styles.itemSeperator}/>}
          onEndReached={()=>this.getDataAndUpdateState()}
          onEndReachedThreshold={0.5}
        />}
       
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
 listItem: {
    padding: 10,
    height:120
  },
  
  textStyle: {
    color: 'black',
    fontSize: 20
  },
 
  itemSeperator: {
    height: 0.5,
    backgroundColor: 'grey'
  }

});
