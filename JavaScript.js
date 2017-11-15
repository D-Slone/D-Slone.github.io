// JavaScript document

function validateForm() {
    
    var fn = document.forms["contactForm"]["firstname"].value;
    
    var ln = document.forms["contactForm"]["lastname"].value;
    
    var p = document.forms["contactForm"]["phone"].value;

    var e = document.forms["contactForm"]["email"].value;    
    
    var m = document.forms["contactForm"]["message"].value;
    
    
    
    if (!isNaN(fn) || fn == "")       
    {
        
        alert("Please enter your first name using letters only.");
        document.getElementById("fnTextBox").focus();
        return false;
        
    }

    if (!isNaN(ln) || ln == "")       
    {
        
        alert("Please enter your last name using letters only.");
        document.getElementById("lnTextBox").focus();
        return false;
        
    }

    if (isNaN(p) || p == "")
    {
        
        alert("Please enter your phone number as digits only.");
        document.getElementById("pTextBox").focus();
        return false;
  
    }

    if (e == "")       
    {
        
        alert("Please enter your email.");
        document.getElementById("eTextBox").focus();
        return false;
        
        
    }

    if(m == "")
    {
        alert("Please enter a message in the box provided.");
        document.getElementById("mTextBox").focus();
        return false;
    }
    else
    {
        alert("You successfully submitted the form!")
    }         
}


// When the user clicks on the products button, toggle between hiding and showing the dropdown content
function myFunction() {
    
        document.getElementById("myDropDown").classList.toggle("show");
    
    }
    
    
    
    // Closes the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    
      if (!event.target.matches('.dropbtn')) {
    
        var dropdowns = document.getElementsByClassName("dropdown-content");
    
        var i;
    
        for (i = 0; i < dropdowns.length; i++) {
    
          var openDropdown = dropdowns[i];
    
          if (openDropdown.classList.contains('show')) {
    
            openDropdown.classList.remove('show');
    
          }// end inner if statement
    
        }// end for loop
    
      }// end outer if statement
    
    }// end window.onclick


    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,3000);
    
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }




var date = new Date();
document.getElementById("date").innerHTML = "Today is: " + date.toDateString();