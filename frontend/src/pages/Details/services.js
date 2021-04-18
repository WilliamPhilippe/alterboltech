import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function getEmpresaById(id) {
  let response;

  try {
    response = await api.get(`enterprises/${id}`);
  } catch (error) {
    throw new RequestException(error.response.data);
  }

  return response;
}

export { getEmpresaById };
