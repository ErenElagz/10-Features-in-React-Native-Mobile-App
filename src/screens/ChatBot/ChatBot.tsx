import React, {useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Pages from '../../data/Pages';

const GEMINI_API_KEY = 'AIzaSyAsOh8SVyaEFIpVq2mKLlSNkf-qE7waadg';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

export default function ChatbotScreen() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {id: '0', text: 'Hey! How can I help you 😁? ', sender: 'bot'},
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const flatListRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => flatListRef.current?.scrollToEnd({animated: true}), 100);
  };

  const handleSend = useCallback(async () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      text: trimmedInput,
      sender: 'user',
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setError(null);
    scrollToBottom();

    setIsLoading(true);

    try {
      const requestBody = {
        contents: [{parts: [{text: trimmedInput}]}],
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      if (!response.ok) {
        const apiError =
          responseData?.error?.message || `HTTP ${response.status}`;
        throw new Error(`API Hatası: ${apiError}`);
      }
      const botText = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (botText) {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: botText.trim(),
          sender: 'bot',
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } else {
        console.error('API Yanıt Formatı Hatalı:', responseData);
        throw new Error('Anlaşılır bir cevap alınamadı.');
      }
    } catch (err) {
      console.error('Mesaj gönderilirken hata:', err);
      setError(err.message || 'Bilinmeyen bir hata oluştu.');

      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: `Hata: ${err.message || 'Bilinmeyen bir hata oluştu.'}`,
        sender: 'bot',
        isError: true,
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  }, [inputText, isLoading]);

  const renderMessage = ({item}) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'user' ? styles.userBubble : styles.botBubble,
        item.isError ? styles.errorBubble : {},
      ]}>
      <Text style={item.sender === 'user' ? styles.userText : styles.botText}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[3].index}</Text>
        <Text style={styles.title}>{Pages[3].title}</Text>
        <Text style={styles.description}>{Pages[3].description}</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        onContentSizeChange={scrollToBottom}
        onLayout={scrollToBottom}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Write anything..."
          editable={!isLoading}
          multiline
          cursorColor={'#000'}
          placeholderTextColor={'#aaa'}
        />
        {/* Gönder Butonu */}
        <TouchableOpacity
          style={[
            styles.sendButton,
            (isLoading || !inputText.trim()) && {backgroundColor: '#ccc'},
          ]}
          onPress={handleSend}
          disabled={isLoading || !inputText.trim()}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginTop: 8,
    color: '#000',
    letterSpacing: -0.75,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 16,
  },
  function: {
    fontSize: 24,
    color: 'darkblue',
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 18,
    marginBottom: 16,
  },
  userBubble: {
    backgroundColor: 'darkblue',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  botBubble: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  errorBubble: {
    backgroundColor: '#FFDDDD',
  },
  userText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  botText: {
    color: '#000000',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 120,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
    paddingHorizontal: 16,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    height: 48,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
