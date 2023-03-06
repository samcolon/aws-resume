window.onload = function getViewCount() {
  const count = document.getElementById('viewCount');
  console.log(count);
  
  apiUrl = 'https://txi1h1x7pd.execute-api.us-east-1.amazonaws.com/Prod/'
  
  fetch(apiUrl, { method: "GET" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Sorry, something went wrong");
      }
    })
    .then((data) => {
      obj= JSON.parse(data.body);
      count.innerText = obj.Visit_Count;
      console.log(JSON.parse(data.body));
  
    });
  }
  






  
  