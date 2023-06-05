// Set the target date
var targetDate = new Date("May 25, 2023 18:00:00").getTime();

// Update the remaining time every second
setInterval(function() {
    // Get the current date and time
    var currentDate = new Date().getTime();
    
    // Calculate the remaining time in milliseconds
    var remainingTime = targetDate - currentDate;
    
    // If the remaining time is less than 0, display another message
    if (currentDate > targetDate) {
        document.getElementById("remaining-time").innerHTML = "Looks like you are late! Please move to the next stall";
    } else {
        // Convert the remaining time to days, hours, minutes, and seconds
        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        // Update the remaining time element on the page
        document.getElementById("remaining-time").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds remaining ";
    }
}, 1000);

// Update the current time every second
setInterval(function() {
    // Get the current date and time
    var currentDate = new Date();

    // Format the current time
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var currentTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    // Update the current time element on the page
    document.getElementById("current-time").innerHTML = currentTime;
}, 1000);

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Create an object to store the form data
    var feedbackData = {
      name: name,
      email: email,
      message: message
    };
  
    // Here, you can perform further actions with the feedback data,
    // such as sending it to a server or storing it in the browser's localStorage.
  
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  
    // Display a confirmation message
    alert("Thank you for your feedback!");
  
    return false;
  }
  
  // Add form submission event listener
  var form = document.getElementById("feedback-form");
  form.addEventListener("submit", handleSubmit);