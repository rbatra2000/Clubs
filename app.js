(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCrEhme7ooV7r7RpzbQkncF-VnLus-sRwA",
    authDomain: "clubs-f27b9.firebaseapp.com",
    databaseURL: "https://clubs-f27b9.firebaseio.com",
    projectId: "clubs-f27b9",
    storageBucket: "clubs-f27b9.appspot.com",
    messagingSenderId: "252057731762"
  };
  firebase.initializeApp(config);

  //Get elements
  const txtEmail = document.getElementById('userid');
  const txtPassword = document.getElementById('password');
  const btnLogin = document.getElementById('submit');

  //Add login events
  btnLogin.addEventListener('click', e => {
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass)
    promise.catch(e=> console.log(e.message));
  });

} ());
