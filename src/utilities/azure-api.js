
import { sendRequest } from './users-api'

const BASE_URL = '/api/azure';

export function post1PDF(newPDFModelItem) {
    return sendRequest(`${BASE_URL}/newPDFModelItem`, 'POST', newPDFModelItem);
}

export function deleteItem(deleteItem1) {
  return sendRequest(`${BASE_URL}/deleteItem`, 'DELETE', deleteItem1);
}

export function allPDFs() {
  return sendRequest(`${BASE_URL}/allPDFs`, 'GET',);
}


// helper function 

