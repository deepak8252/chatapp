import { useContext, useEffect, useState } from 'react';
import Messages from './Messages';
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../util/Firebase';

const Messagess = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data.chatId) {
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        if (doc.exists()) {
          // Get the messages from the document data and update state
          setMessages(doc.data().messages || []);
        } else {
          console.log("No such document!");
        }
      });

      return () => unsub();
    }
  }, [data.chatId]);
      console.log(messages)
  return (
    <div className='h-64 bg-green-700 overflow-scroll'>
      <div>
        {/* Render the messages */}
        {messages.map((message, index) => (
          <Messages key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Messagess;
