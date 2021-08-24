        const button = document.getElementById("btn");
        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
         
          fetch("/getrate", requestOptions)
            .then(response => response.json())
            .then(result => {
                const obj = JSON.parse(result);
                const INRrate = obj.rates.INR;
                button.addEventListener("click", function(){
                    let x = document.getElementById("INR-amt").value;
                    document.getElementById("EUR-amt").value = parseFloat(x/INRrate).toFixed(2);
                })
                //console.log(INRrate);
            })
            .catch(error => console.log('error', error));