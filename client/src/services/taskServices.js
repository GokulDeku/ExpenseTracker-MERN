import axios from 'axios';

const apiUrl = "http://localhost:8080/api/transactions";

export function getTransactions() {
  return axios.get(apiUrl);
}

export function addTransaction(transaction) {
  return axios.post(apiUrl, transaction);
}

// export function updateTask(id, task) {
//   return axios.put(apiUrl + "/" + id, task);
// }

export function deleteTransaction(transaction) {
  return axios.delete(apiUrl + "/" + transaction);
}