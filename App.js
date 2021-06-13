//UI Designing Details Explanation


// import React, {Component} from 'react';
// import {Button, StyleSheet, Text, View } from 'react-native';
// import ImagesExample from './image_example.js'


// export default class App extends Component {
//   render(){
//     return(
//       <View style={styles.container}>
//          <ImagesExample></ImagesExample>

//          <Text style={styles.TextDesign}>Open up App.js to start working on your app!</Text>
//             <Text style={styles.TextDesign}>Changes you make will automatically reload.</Text>
//             <Text style={styles.TextDesign}>Shake your phone to open the developer menu.</Text>
//             <Button onPress={handlePress} title = "Submit" color = "blue" fontSize = "20" fontWeight = "bold"></Button>
//       </View>
//     );
//   }
// }

// const handlePress = () => false

// const styles = StyleSheet.create({
// container : {
//   flex: 1,
//   backgroundColor: 'pink',
//   alignItems: 'center',
//   justifyContent: 'center'
// },
// TextDesign : { 
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FAF8F7'
    
    
// },
// ImageDesign : { 
//   height: 300,
//   width: 300,
 
  
// }
// });


// GET Method Working Fine
// import React, { Component } from 'react'
// import { View, Text } from 'react-native'

// class HttpExample extends Component {
//    state = {
//       data: ''
//    }
//    componentDidMount = () => {
//       fetch('https://jsonplaceholder.typicode.com/posts/1', {
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//          console.log(responseJson);
//          this.setState({
//             data: responseJson
//          })
//       })
//       .catch((error) => {
//          console.error(error);
//       });
//    }
//    render() {
//       return (
//          <View>
//             <Text>
//                {this.state.data.body}
//             </Text>
//          </View>
//       )
//    }
// }
// export default HttpExample

//Post Method 

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

class HttpExample extends Component {
   state = {
      data: ''
   }
componentDidMount = () => {
let data = new FormData();
data.append("Authorization", 'Bearer8e9a397346b613b81c891219cea6e35c6b3c6d93')
data.append("vendor_id", 15)
data.append("service_id", 136)


  fetch('https://dneeds.in/dailyneeds/vendor/get_all_services_by_id', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  },
  body: data
})
   .then((response) => response.json())
      .then((responseJson) => {
         console.warn(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
           <Text>StatusCode : {this.state.data.status_code}</Text>
            <Text>Status : {this.state.data.status}</Text>
            <FlatList
            data={this.state.data.assigned_services}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>ServiceType : { item.address }</Text>
            )}
          />
         </View>
      )
   }
}
export default HttpExample