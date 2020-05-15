document.getElementById("button").addEventListener("click", function() {

    // Grabs the values from input fields
    var percentage = document.getElementById("percentage").value;
    var wholenumber = document.getElementById("wholenumber").value;
    var result = document.getElementById("result");

    // Returns the result of the percentage portion amount
    return (result.textContent = percentage / 100 * wholenumber);
  });

