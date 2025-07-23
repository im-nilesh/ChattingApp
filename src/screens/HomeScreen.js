import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { CometChatConversations } from '@cometchat/chat-uikit-react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CometChatConversations />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
