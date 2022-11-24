import { initializeApp } from 'firebase/app';

// хорошо бы защитить все эти ключи и положить их как env переменные
// так я делал для своего imhonet (https://github.com/Getvion/imhonet-react-ts-redux)
// но в данныой ситуации не считаю, что это необходимо, т.к. это лишь тестовое задание
const firebaseConfig = {
  apiKey: 'AIzaSyA-6GofMnzK2O3_sy5ItEYTEdZg-qyYEU8',
  authDomain: 'test-woman-todo.firebaseapp.com',
  projectId: 'test-woman-todo',
  storageBucket: 'test-woman-todo.appspot.com',
  messagingSenderId: '525152559003',
  appId: '1:525152559003:web:4e538f5c1d53b38ad0cb3e'
};

initializeApp(firebaseConfig);
