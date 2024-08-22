import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import { login, signup } from '../../firebase';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    loading ? (
      <motion.div
        className="login-spinner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={netflix_spinner} alt="" />
      </motion.div>
    ) : (
      <motion.div
        className='login'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={logo}
          className='login-logo'
          alt='logo'
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        />
        <motion.div
          className="login-form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" ? (
              <motion.input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='Your name'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            ) : null}
            <motion.input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='E-mail'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.button
              onClick={user_auth}
              type='submit'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {signState}
            </motion.button>
            <div className="form-help">
              <div className='remember'>
                <input type='checkbox' id='remember-me' />
                <label htmlFor='remember-me'>Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <motion.div
            className="form-switch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {signState === "Sign In" ? (
              <p>
                New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up now</span>
              </p>
            ) : (
              <p>
                Already have an account? <span onClick={() => setSignState("Sign In")}>Sign in now</span>
              </p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    )
  );
};

export default Login;
