import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
//import axios from 'axios';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log('SUCCESS');
    login(email, password);

    //   const newUser = {
    //     name,
    //     email,
    //     password,
    //   };

    //   try {
    //     const config = {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     };

    //     const body = JSON.stringify(newUser);
    //     const res = await axios.post('/api/users', body, config);
    //     console.log(res.data);
    //   } catch (err) {
    //     console.error(err.response.data);
    //   }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In </h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into you account
      </p>
      <form
        className='form'
        action='create-profile.html'
        onSubmit={(e) => onSubmit(e)}
      >
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account <Link to='/register'> Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
