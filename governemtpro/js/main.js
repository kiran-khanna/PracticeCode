// RADIO BUTTON AND CHECKBOX VALIDATION ON SUBMIT

function check1() {
  var radio_check_val = "";
  for (radio_element of document.getElementsByName("answer")) {
    if (radio_element.checked) {
      alert("Your data submitted successfully!");
      radio_check_val = radio_element.value;
    }
  }
  if (radio_check_val === "") {
    alert("Please select one radio button");
  }
}

// TEXT AREA VALIDATION ON SUBMIT
function validate() {
  if (document.getElementById("details").value == "") {
    alert("Please Provide Details!");
    document.getElementById("details").focus();
    return false;
  } else {
    alert("Your data submitted successfully!");
  }
}

// GETTING JSON DATA
let data = (function () {
  // let json = null;
  $.ajax({
    async: false,
    // crossDomain: true,
    dataType: "json",
    url: "./data.json",
    success: (data) => {
      json = data;
    },
  });
  return json;
})();

//  RANDOM PAGE VISIBLE
window.onload = function () {
  let min = 0;
  let max = data.length - 1;
  let ind = Math.floor(Math.random() * (max - min + 1)) + min;
  choice = data[ind];
  
  //question
  $(".message")[0].innerHTML = choice.questions;

  choice_section = $("form")[0];
  // RADIO SECTION
  if (choice.type == "radio") {
    choice_section.setAttribute("onsubmit", "check1();");
    for (const key in choice.options) {
      let value = choice.options[key];
      choice_section.innerHTML += `<div class="check br-checkbox">
            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="${key}"
                    name="answer" value="${value}">
                <label class="custom-control-label" for="${key}">${value}</label>
            </div>
        </div>`;
    }
  }
  // CHECKBOX SECTION
  else if (choice.type == "checkbox") {
    choice_section.setAttribute("onsubmit", "check1();");
    for (const key in choice.options) {
      let value = choice.options[key];
      choice_section.innerHTML += `<div class="br-multiMsg" id="${key}">
            <input type="checkbox" id="${key}" name="answer" value="${value}">
            <label for="${key}">${value}</label>
            </div>`;
    }
    // MAXIMUM COUNT
    var limit = 2;
    $("input").on("change", function (evt) {
      if ($(this).siblings(":checked").length >= limit) {
        this.checked = false;
      }
    });
  }

  //MESSAGE SECTION
  else if (choice.type == "textbox") {
    choice_section.setAttribute("onsubmit", "return validate();");
    choice_section.innerHTML = `<textarea name="details" id="details" class="message-area" rows="7"></textarea>`;
  }

  // SUBMIT BUTTON
  choice_section.innerHTML += `<div class="mt-4 text-center">
    <button type="submit" id="submit_items" class="banner-btn buttons">Submit</button>
</div>`;
};
