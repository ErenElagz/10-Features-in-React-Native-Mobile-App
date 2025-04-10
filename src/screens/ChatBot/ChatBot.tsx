import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Pages from '../../data/Pages';
import {GoogleGenerativeAI} from '@google/generative-ai';
import Markdown from 'react-native-markdown-display';
import CustomButton from '../../components/Button';

const date = new Date();
const API_KEY = 'AIzaSyCtzWJ-FYYJ8Vb2G299HcYkd2o7XPAZItM';
const genAI = new GoogleGenerativeAI(API_KEY);

function Response(props) {
  const [generatedText, setGeneratedText] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const model = genAI.getGenerativeModel({model: 'gemini-pro'});
      const prompt = props.prompt;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setGeneratedText(text);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.response}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Image
            source={require('../../assets/avatar.jpg')}
            style={styles.icon}
          />
          <Text style={{fontWeight: 600}}>Gemini</Text>
        </View>
        <Text style={{fontSize: 10, fontWeight: '600'}}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
      </View>
      <Markdown>{generatedText}</Markdown>
    </View>
  );
}

function Message(props) {
  return (
    <View style={styles.message}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Image
            source={require('../../assets/avatar.jpg')}
            style={styles.icon}
          />
          <Text style={{fontWeight: 500}}>Username</Text>
        </View>
        <Text style={{fontSize: 10, fontWeight: 600}}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
      </View>
      <Text style={{fontSize: 14, width: '100%', flex: 1, paddingLeft: 0}}>
        {props.message}
      </Text>
    </View>
  );
}

export default function ChatbotScreen() {
  const [inputText, setInputText] = useState('');
  const [listData, setListData] = useState([]);

  const SearchInput = () => {
    setListData(prevList => [...prevList, inputText]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[3].index}</Text>
        <Text style={styles.title}>{Pages[3].title}</Text>
        <Text style={styles.description}>{Pages[3].description}</Text>
      </View>
      <View>
        <FlatList
          style={{marginBottom: 80}}
          data={listData}
          renderItem={({item}) => (
            <View>
              <Message message={item} />
              <Response prompt={item} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {/* Search-Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Ask to Gemini AI"
          style={styles.input}
          placeholderTextColor={'#aaa'}
          value={inputText}
          onChangeText={text => setInputText(text)}
          selectionColor={'#323232'}></TextInput>
        <CustomButton title="Send" onPress={SearchInput} />
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
  response: {
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#fafafa',
    marginBottom: 8,
    padding: 16,
    borderRadius: 16,
  },
  message: {
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#f1f2f3',
    marginBottom: 8,
    padding: 16,
    borderRadius: 16,
  },
  icon: {
    width: 28,
    height: 28,
  },
  searchBar: {
    width: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
  },
  input: {
    backgroundColor: '#fff',
    width: '85%',
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 32,
    borderWidth: 0.1,
  },
});
