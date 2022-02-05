var today = dayjs().format("dddd, MMMM D h:ma")
 
$("#currentDay").append(today);
 
var loadData = function() {
var id = 0
for (var i = 9; i <= 17; i++) {
    if (i < dayjs().hour()) {
        $(`#${i}`).addClass("past");
        }
    else if (i > dayjs().hour()) {
        $(`#${i}`).addClass("future");
        }
    else {
        $(`#${i}`).addClass("present");
        }
    id++;
    $(`#${i}`).text(localStorage.getItem(id));
}}
 
$(".saveBtn").on("click", function(){
    var id = $(this).siblings(".hour").attr("id");
    var input = $(this).siblings(".description").val().trim();
    localStorage.setItem(id, input)
    loadData();
})
 
loadData();