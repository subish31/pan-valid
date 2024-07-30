function validatePAN() {
    const pan = document.forms["form"]["pan"].value;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  
    if (!panPattern.test(pan)) {
      alert("Invalid PAN. Please enter a valid PAN number.");
      return false;
    }
    else{
      alert("submitted successfully");
    }
  }