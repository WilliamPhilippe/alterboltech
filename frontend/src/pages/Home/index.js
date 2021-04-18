import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import NavContent from '../../components/NavContainer';

import Loading from '../../components/Loading';

import { Content } from './styles';

import { getEmpresasByName } from './services';

import api from '../../services/api';

function Home({ history }) {

  // useEffect(() => {
  //   const token = api.defaults.headers.Authorization;

  //   if(!token) return history.push("/login");
  //   const [, space] = token.split(' ');
  //   if(!space) return history.push("/login");
  // })

  return (
    <Content>
      <NavContent/>
      Home
    </Content>
  );
}

Home.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Home;
