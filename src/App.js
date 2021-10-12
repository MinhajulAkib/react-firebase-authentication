import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

function App() {
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleGoogleSignIn = () => {
      const auth = getAuth(); 
      signInWithPopup(auth, googleProvider)
  .then(result => {
    const user = result.user;
     console.log(user);
  })
}

const handleRegistration = e => {
     console.log(email, password)
     e.preventDefault();
}

const handleEmailChange = e =>{
  setEmail(e.target.value);
}
const handlePasswordChange = e => {
  setPassword(e.target.value);
}
  return (
    <div className="mx-5 mt-2">
       <form onSubmit={handleRegistration}>
         <h3 className="text-primary">Please Register</h3>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input onBlur={handleEmailChange} type="email" class="form-control" id="inputEmail3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" />
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
  </div>
  );
}

export default App;
