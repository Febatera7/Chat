import React, { useState, useEffect } from 'react';
import { MdSend } from 'react-icons/md';

import {
  Container,
  Menu,
  H1,
  Label,
  Ul,
  Li,
  LiB,
  Header,
  Content,
  Chat,
  Send,
  SendBox,
  SendButton,
  Messages,
  User,
  Date,
  Text,
  Pin
} from './styles';

import Data from '../../assets/api.json';
function Main () {
  const [channel, setChannel] = useState('403');
  const [channelName, setChannelName] = useState('#today-i-learned');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [pin, setPin] = useState({});

  useEffect(() => {
    const selectedChannel = Data.channels.find(item => item.id === channel);
    setChannelName(selectedChannel.name);

    const listMessages = Data.messages.filter(
      item => item.channel_id === channel
    );

    const users = Data.users.filter(item => item.id);

    
    setMessages(listMessages);
    setUsers(users);

  }, [channel])

  const user = (id) => {
    const name = users.find(item => item.id === id);

    return name.username;
  }

  useEffect(() => {
    let pins = {};
    Data.channels.map(c => {
      const msgs = Data.messages.filter(item => item.channel_id === c.id);
      return (pins = { ...pin, [`c${c.id}`]: msgs.length });
    })

    setPin(pins);
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Menu>
        <H1>XYZ Company</H1>
        <Label>Channels</Label>
        <Ul>
          {Data.channels.map(c =>
            pin[c.id] > 0 ? (
              <LiB onClick={() => setChannel(c.id)}>
                #{c.name} <Pin>{pin[`c${c.id}`]}</Pin>
              </LiB>
            ) : (
              <Li onClick={() => setChannel(c.id)}>#{c.name}</Li>
            )
          )}
        </Ul>
      </Menu>
      <Content>
        <Header>#{channelName}</Header>
        <Chat>
          {messages.map(m => (
            <Messages>
              <User>{user(m.user_id)}</User> - <Date>{m.timestamp}</Date>
              <Text>{m.content}</Text>
            </Messages>
          ))}
        </Chat>
        <Send>
          <SendBox placeholder='type...' />
          <SendButton>
            <MdSend />
          </SendButton>
        </Send>
      </Content>
    </Container>
  )
};

export default Main;
