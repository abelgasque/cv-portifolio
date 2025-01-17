export const environment = {
  production: true,
  version: "v1.0.15",
  avatarImg: "{{FIREBASE_AVATAR_IMG}}",
  cvImg: "{{FIREBASE_CV_IMG}}",
  firebaseConfig: {
    apiKey: "{{FIREBASE_API_KEY}}",
    authDomain: "{{FIREBASE_AUTH_DOMAIN}}",
    databaseURL: "{{FIREBASE_DB_URL}}",
    projectId: "{{FIREBASE_PROJECT_ID}}",
    storageBucket: "{{FIREBASE_STORAGE_BUCKET}}",
    messagingSenderId: "{{FIREBASE_MESSAGING_SENDER_ID}}",
    appId: "{{FIREBASE_APP_ID}}",
    measurementId: "{{FIREBASE_MEASUREMENT_ID}}"
  }
};