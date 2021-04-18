import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'

import { Content, FormContent } from './styles';

import Loading from '../../components/Loading';

import { sendLogin } from './services';

function Login({ history }) {

  const { register, handleSubmit, errors } = useForm();

  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    setErrorMessage('')
    try {
      const response = await sendLogin(data);
      console.info(response)
      history.push('/');
    } catch (err) {
      setErrorMessage(err.response.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Content>
      <div className="container">
        <FormContent>
          <h5>Seja bem-vindo</h5>
          {loading && <Loading />}
          <form onSubmit={handleSubmit(onSubmit)}>
              
            <input
              name="username"
              ref={register}
              id="icon_prefix"
              className="validate"
              placeholder="username"
            />
        
            <input
              name="password"
              ref={register}
              id="password"
              type="password"
              className="validate"
              placeholder="password"
            />
            
            {errorMessage && (
              <span className="error-text">
                {errorMessage}
              </span>
            )}
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Entrar
            </button>
          </form>
          <Link to="">Registrar-me</Link>
        </FormContent>
      </div>
    </Content>
  );
}

export default Login;
