import { ADD_ARTICLE } from "../constants/action-types"; 
// import { addArticle } from "../actions/index";

export function addArticle(payload) {
    return { type: "ADD_ARTICLE", payload }
  };

// export function getData() {
//   return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: "DATA_LOADED", payload: json });
//       });
//   };
// }

export function getData() {
  return { type: "DATA_REQUESTED" };
}

  
// export function mapDispatchToProps(dispatch) {
//     return {
//         addArticle: article => dispatch(addArticle(article))
//     };
// }

