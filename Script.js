console.log($("#currentDay"))
let today = $("#currentDay");
let currentHour = moment().format("H");
today.text(moment());

$("input").each(function() {
  let timeEl = $(this).data("time");
  let savedText = localStorage.getItem(elTime);
  if(elTime == currentHour) {
    $(this).addClass("present");
    $(this).val(savedText);
  }
  else(elTime > currentHour) {
    $(this).addClass("future");
    $(this).val(savedText);
  }
  else{
    $(this).addClass("past");
    $(this).val(savedText);
  };
});
$(".row").on("click", function(event){
  if(event.target.matches("button")){
    let submitTextDiv = event.target.parentElement.children[1];
    let timeKey = submitTextDiv.getAttribute("data-time");
    localStorage.setItem(timeKey, submitTextDiv.value)
  }
})
