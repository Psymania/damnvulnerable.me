

window.onload = function(){
  // Setup XHR
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/xhr/simple?description=console.log(1)', true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response
      var response = JSON.parse(xhr.responseText);
      var description = response.description;
      var div = document.getElementById('vulnerableDiv');
      // populate the div the description
      try{
        eval(description);
      }
      catch(e){
        console.warn("Error evaluating EVAL function." + e);
      }
    }
  }
}