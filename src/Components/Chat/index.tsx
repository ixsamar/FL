import React, {useState, useRef, PureComponent} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from 'react-native';
import {format} from 'date-fns';
import EmojiSelector from 'react-native-emoji-selector';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {styles} from './styles';
import {formatTimestamp, navigateBack} from '../../Utils/CommonUtils';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [longPressMessageId, setLongPressMessageId] = useState(null);
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const inputRef = useRef(null);
  const flatListRef = useRef(null);

  const sendMsg = () => {
    if (editingMessageId) {
      const updatedMessages = messages.map(msg =>
        msg.id === editingMessageId ? {...msg, text: message} : msg,
      );
      setMessages(updatedMessages);
      setEditingMessageId(null);
    } else {
      setMessages([
        {id: new Date().getTime(), type: 'send', text: message},
        ...messages,
      ]);
    }
    setMessage('');
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const receiveMsg = () => {
    setMessages([
      {id: new Date().getTime(), type: 'receive', text: message},
      ...messages,
    ]);
    setMessage('');
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const editMessage = (id, text) => {
    setMessage(text);
    setEditingMessageId(id);
  };

  const respondToMessage = id => {
    if (longPressMessageId !== id) {
      const updatedMessages = messages.map(msg =>
        msg.id === id ? {...msg, responded: !msg.responded} : msg,
      );
      setMessages(updatedMessages);
    }
  };

  const handleDoubleTap = id => {
    const updatedMessages = messages.map(msg =>
      msg.id === id && msg.type === 'receive'
        ? {...msg, responded: !msg.responded}
        : msg,
    );
    setMessages(updatedMessages);
  };

  const handleLongPress = id => {
    setLongPressMessageId(id);
    const updatedMessages = messages.map(msg =>
      msg.id === id && msg.type === 'send'
        ? {...msg, text: 'Message deleted'}
        : msg,
    );
    setMessages(updatedMessages);
  };

  const toggleEmojiSelector = () => {
    setShowEmojiSelector(prev => !prev);
    if (showEmojiSelector) {
      inputRef.current.focus();
    } else {
      Keyboard.dismiss();
    }
  };

  const handleEmojiSelection = emoji => {
    setMessage(prevMessage => prevMessage + emoji);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.userNameContainer}>
          <TouchableOpacity onPress={navigateBack}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <View style={styles.dpAndName}>
            <Image
              source={{
                url: 'https://pxbar.com/wp-content/uploads/2023/10/stylish-whatsapp-dp-for-girl-1024x1024.jpg',
              }}
              style={{height: hp('4%'), width: wp('10%')}}
            />

            <Text style={styles.userName}>Shyam Reddy</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text>Event</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          data={messages}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ChatItem
              {...{
                item,
                onEdit: editMessage,
                onRespond: respondToMessage,
                onDoubleTap: handleDoubleTap,
                onLongPress: handleLongPress,
              }}
            />
          )}
          inverted
          contentContainerStyle={styles.listStyle}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}>
        <TouchableOpacity onPress={toggleEmojiSelector}>
          <Text style={styles.emojiButton}>😊</Text>
        </TouchableOpacity>

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={message}
          placeholder="Type your message"
          onChangeText={setMessage}
          onFocus={() => setShowEmojiSelector(false)}
        />
        <Button
          title={editingMessageId ? 'Submit' : 'Send'}
          onPress={sendMsg}
          disabled={message.length === 0}
        />
        <Button
          title="Receive"
          onPress={receiveMsg}
          disabled={message.length === 0}
        />
      </KeyboardAvoidingView>

      {showEmojiSelector && (
        <View style={{height: hp('30%')}}>
          <EmojiSelector
            onEmojiSelected={handleEmojiSelection}
            columns={9}
            showSearchBar={false}
            showSectionTitles={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

class ChatItem extends PureComponent {
  render() {
    const {item, onEdit, onRespond, onDoubleTap, onLongPress} = this.props;
    const isSent = item.type === 'send';

    const handlePress = () => {
      if (isSent) {
        onEdit(item.id, item.text);
      } else {
        onRespond(item.id);
      }
    };

    const handleDoubleTap = () => {
      if (item.type === 'receive') {
        onDoubleTap(item.id);
      }
    };

    const handleLongPress = () => {
      onLongPress(item.id);
    };

    return (
      <TouchableOpacity
        style={[
          styles.chatItemCommon,
          item.type === 'send' ? styles.send : styles.receive,
        ]}
        onPress={handlePress}
        onLongPress={handleLongPress}>
        <Text style={styles.msgtxt}>{item.text}</Text>
        {item.responded && item.type === 'receive' && (
          <Text style={styles.responseIcon}>👍</Text>
        )}
        <Text style={styles.timestamp}>{formatTimestamp(item?.id || '')}</Text>
      </TouchableOpacity>
    );
  }
}

export default Chat;
