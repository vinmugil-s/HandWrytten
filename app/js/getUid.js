function getUid()
{
  var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var options = {
   url: 'https://api.handwrytten.com/v1/auth/authorization',
   method: 'GET',
   url_query:
  [
          {
              key: 'login',
              value: userName
            },
            {
              key: 'password',
              value: password
            }
          ]
  };
  ZFAPPS.request(options).then(function (response) {
    console.log(response);
    let body = JSON.parse(response.data.body);
    var uid = body.uid;
    console.log(uid);
    window.alert("User data fetched successfully");
  }).catch(function (err) {
    console.log(err);
  });
}

window.getUid = getUid;
