import axios from 'axios';
 
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/users',
});
// 로그인 함수
function loginUser(userData) {
  return instance.post('login', userData);
}
 
export { loginUser };
