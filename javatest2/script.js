function generate() {
    //array of random quotes
    var ranquotes = [
      "Believe you can and you're halfway there. <br/>-Theodore Roosevelt",
      "You have to dream before your dreams can come true. <br/>-A.P.J Abdul Kalam",
      "Man needs his difficulties because they are necessary to enjoy success. <br/>-A.P.J Abdul Kalam",
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose. <br/>-Bill Gates",
      "When something is important enough, you do it even if the odds are not in your favor. <br/>-Elon Musk",
      "If you get up in the morning and think the future is going to be better, it is a bright day. <br/>-Elon Musk",
      "I have noticed even people who claim everything is predestined, and that we can do nothing to change it, look before they cross the road. <br/>-Stephen Hawking",
      "Life would be tragic if it weren't funny. <br/>-Stephen Hawking",
      "Life is like riding a bicycle. To keep your balance you must keep moving. <br/>-Albert Einstien",
      "Look deep into nature, and then you will understand everything better. <br/>-Albert Einstein"
    ];
  
    var quotations = Math.floor(Math.random() * ranquotes.length);
    document.getElementById("txt").innerHTML = ranquotes[quotations];
}
  