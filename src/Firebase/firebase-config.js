import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD848I4WSsri7EvsM7YvKjDBw3AQCd4i6k',
  databaseURL:
    'https://console.firebase.google.com/project/connectplus-c89f9/database/connectplus-c89f9-default-rtdb/data/~2F',
  projectId: 'connectplus-c89f9',
  appId: '1:573234530019:android:8b033f697a27d507da67d6',
};

export default Firebase.initializeApp(firebaseConfig);

// databaseURL is from RealTime Database of Firebase
// projectId is from Project Settings of Firebase
// appId is from Project Settings of Firebase
