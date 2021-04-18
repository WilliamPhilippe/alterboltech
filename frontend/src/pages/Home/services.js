import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function getEmpresasByName({ search }) {
  let response;

  try {
    response = await api.get(`enterprises?name=${search}`);
  } catch (error) {
    throw new RequestException(error.response.data);
  }

  return response;
}

export { getEmpresasByName };
