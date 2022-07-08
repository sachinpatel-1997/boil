 import api from "../services/api";

 import {
   
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
  } from "./userActions";
 
  
//   export function createUser(data, history) {
//     return (dispatch) => {
//       dispatch({ type: CREATE_USER_REQUEST });
//       axios
//         .post(`${api_url}/api/user`, data)
//         .then(function (res) {
//           console.log("res=>", res.data);
//           setTimeout(() => {
//             dispatch({
//               type: CREATE_USER_SUCCESS,
//               payload: res.data,
//             });
//             history.push("/");
//           }, 1000);
//         })
//         .catch(function (error) {
//           const { response } = error;
//           console.log("err", response);
//           if (response !== undefined) {
//             dispatch({
//               type: CREATE_USER_FAILURE,
//               payload: response.data,
//             });
//             alert(response.data?.message);
//           }
//         });
//     };
//   }
  
  export function getUsers() {
    return (dispatch) => {
      dispatch({ type: GET_USER_REQUEST });
      api
        .get(`/v1/users`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: GET_USER_FAILURE,
              payload: response?.data,
            });
          }
        });
    };
  }
  
//   export function getUserById(id) {
//     return (dispatch) => {
//       dispatch({ type: GET_USER_BYID_REQUEST });
//       axios
//         .get(`${api_url}/api/user/${id}`)
//         .then(function (res) {
//           console.log("res =>", res.data);
//           dispatch({
//             type: GET_USER_BYID_SUCCESS,
//             payload: res.data,
//           });
//         })
//         .catch(function (error) {
//           const { response } = error;
//           console.log("err", response);
//           if (response !== undefined) {
//             dispatch({
//               type: GET_USER_BYID_FAILURE,
//               payload: response.data,
//             });
//           }
//         });
//     };
//   }
  
//   export function updateUserById(id, data, history) {
//     return (dispatch) => {
//       dispatch({ type: UPDATE_USER_BYID_REQUEST });
//       axios
//         .put(`${api_url}/api/user/${id}`, data)
//         .then(function (res) {
//           console.log("res=>", res.data);
//           setTimeout(() => {
//             dispatch({
//               type: UPDATE_USER_BYID_SUCCESS,
//               payload: res.data,
//             });
//             history.push("/");
//           }, 1000);
//         })
//         .catch(function (error) {
//           const { response } = error;
//           console.log("err", response);
//           if (response !== undefined) {
//             dispatch({
//               type: UPDATE_USER_BYID_FAILURE,
//               payload: response.data,
//             });
//             alert(response.data?.message);
//           }
//         });
//     };
//   }
  
//   export function deleteUserById(id) {
//     return (dispatch) => {
//       dispatch({ type: DELETE_USER_BYID_REQUEST });
//       axios
//         .delete(`${api_url}/api/user/${id}`)
//         .then(function (res) {
//           console.log("res =>", res.data);
//           dispatch({
//             type: DELETE_USER_BYID_SUCCESS,
//             payload: id,
//           });
//         })
//         .catch(function (error) {
//           const { response } = error;
//           console.log("err", response);
//           if (response !== undefined) {
//             dispatch({
//               type: DELETE_USER_BYID_FAILURE,
//               payload: response.data,
//             });
//             alert(response.data?.message);
//           }
//         });
//     };
//   }