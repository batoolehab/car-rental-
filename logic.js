document.addEventListener('DOMContentLoaded', () => {
    const rentButtons = document.querySelectorAll(".rentButton");
    const popupForm = document.getElementById('popupForm');
  
    //rent bnt
    rentButtons.forEach(button => {
      button.addEventListener("click", () => {
        popupForm.style.display = "flex";
      });
    });
  
    
    window.closeForm = function () {
      popupForm.style.display = "none";
    };
      //cancel btn
    const cancelBtn = document.getElementById("cancelBtn");

     cancelBtn.addEventListener("click", () => {
      closeForm(); 
      });
      
       //details btn
      const detailsButtons = document.querySelectorAll(".details-btn");
      detailsButtons.forEach(btn =>
        btn.addEventListener("click", () => {
          const details = btn.nextElementSibling;
          details.classList.toggle("active");
          btn.textContent = details.classList.contains("active")
            ? "Hide Details"
            : "Show Details";
        })
      );
    
      
 

      //rentnow bnt
   
    const form = document.querySelector("form");
  
    let name = form.querySelector("[name='username']");
    let id = form.querySelector("[name='id']");
  
    form.onsubmit = function(event) {
      let validN = false;
      let validID = false;

      if (/^[A-Za-z]+$/.test(name.value.trim())) {
        validN = true;
    }

    if (id.value.trim().length === 14) {
      validID = true;
  }

  
      if (!validN || !validID) {
        event.preventDefault(); 
        alert("Something went wrong:\n- Name must contain only letters.\n- ID must be 14 characters.");
      }else {
        
        closeForm();

    };
  }

  }); 



 
  
