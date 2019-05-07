import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavBar } from "../Reusable/NavBar";
import {
  GiftedChat,
  Bubble,
  messageIdGenerator
} from "react-native-gifted-chat";


class ChatPage extends React.Component {


  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
        <View style={styles.mainContainer}>
           <NavBar></NavBar>
           <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                _id: 1,
                }}
            />
       </View> 
     
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white"
      },
});

export default ChatPage;
