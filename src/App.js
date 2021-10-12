import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
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
     createUserWithEmailAndPassword(auth, email, password)
     .then(result => {
       const user = result.user;
       console.log(user);
     })
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
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" required/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
<br /><br /><br />
<div>-----------------------</div>
<br /><br /><br />
<button onClick={handleGoogleSignIn} >Google Sign In</button>
  </div>
  );
}

export default App;
