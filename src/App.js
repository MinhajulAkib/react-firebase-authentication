import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

function App() {
    const handleGoogleSignIn = () => {
      const auth = getAuth(); 
      signInWithPopup(auth, googleProvider)
  .then(result => {
    const user = result.user;
     console.log(user);
  })
}
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
    </div>
  );
}

export default App;
