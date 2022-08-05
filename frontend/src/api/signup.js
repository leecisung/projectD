import axios from 'axios';
 
function registerUser(userData) {
  // 요청할 URL
  const url = 'http://localhost:3000/api/users/signup';
  return axios.post(url, userData);
}
 
// 함수 export
export { registerUser };