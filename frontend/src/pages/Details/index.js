import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import NavContent from '../../components/NavContainer';

import Loading from '../../components/Loading';

import { Content, CardContent } from './styles';

import { getEmpresaById } from './services';

import api from '../../services/api';

function Details({ history, match }) {
  return (<div>Details</div>)
  if (!api.defaults.headers.common.uid) history.push('/login');

  const [empresa, setEmpresa] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEnterprise() {
      setLoading(true);

      try {
        const response = await getEmpresaById(match.params.id);

        setEmpresa(response.data.enterprise);
      } catch (err) {
        history.push('/');
      } finally {
        setLoading(false);
      }
    }

    loadEnterprise();
  }, [history, match.params.id]);

  return (
    <Content>
      <div className="container">
        <NavContent
          intern={
            <div
              onClick={() => history.push('/')}
              style={{ cursor: 'pointer' }}
              className="col s4"
            >
              <i className="material-icons">arrow_back</i>
            </div>
          }
        />

        {loading ? (
          <Loading />
        ) : (
          <div className="card large">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                alt="empresa foto"
                className="activator"
                src={`https://empresas.ioasys.com.br${empresa.photo}`}
              />
            </div>
            <CardContent className="card-content">
              <h2 className="card-title">{empresa.enterprise_name}</h2>
              <p>{empresa.description}</p>

              <ul>
                <li>
                  <p>
                    Type:{' '}
                    {empresa.enterprise_type &&
                      empresa.enterprise_type.enterprise_type_name}
                  </p>
                </li>
                <li>
                  <p>Country: {empresa.country}</p>
                </li>
                <li>
                  <p>City: {empresa.city}</p>
                </li>
              </ul>
            </CardContent>
          </div>
        )}
      </div>
    </Content>
  );
}

Details.propTypes = {
  history: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
