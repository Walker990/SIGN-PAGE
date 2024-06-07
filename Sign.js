document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const lastInput = document.getElementById("last");
    const numInput = document.getElementById("num");
    const emailInput = document.getElementById("email");
    const signupBtn = document.getElementById("signupBtn");

  
  
    function checkFields() {
      if (nameInput.value.trim() !== "" &&
          lastInput.value.trim() !== "" &&
          numInput.value.trim() !== "" &&
          emailInput.value.trim() !== "") {
        signupBtn.disabled = false;
      } else {
        signupBtn.disabled = true;
      }
    }
  
    
    nameInput.addEventListener("input", checkFields);
    lastInput.addEventListener("input", checkFields);
    numInput.addEventListener("input", checkFields);
    emailInput.addEventListener("input", checkFields);
  

    checkFields();
  
    
    document.getElementById("signupForm").addEventListener("submit", function(event) {
      event.preventDefault();
      
      alert("Sign-up Successful 😀");
    });
  });





// const items = [];
// const proceed = () => {
//     if (hum.value == '') {
//         alert("Please Fill in Your Details")
//     } else {
//         items.push(hum.value)
//         console.log(items);
//         hum.value = '';
//         showItems()
        
//     }
// }


    