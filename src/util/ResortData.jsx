const link = ""; // will need to pull from backend on AWS to access API
let data;

const ResortData = (link) => {
  fetch(link).then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(JSON.stringify(myJson))
  });

  return data;
};

export default ResortData;