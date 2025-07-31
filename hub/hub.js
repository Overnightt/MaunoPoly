fetch("chercherpartie.php")
  .then(response => response.json())
  .then(data => {console.log(data);})
  
