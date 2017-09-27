let rootURL = 'https://www.omdbapi.com/';

exports.search = function(q){
  let url = `${rootURL}?apikey=3f1288a7&s=${q}`;
  console.log(url);
  return fetch(url)
    .then((resp)=>resp.json())
    .then((json)=>{
      return json.Search;
    });
}

exports.view = function(id){
  let url = `${rootURL}?apikey=3f1288a7&i=${id}&plot=short&r=json`;
  return fetch(url)
    .then((resp)=>resp.json());
}
