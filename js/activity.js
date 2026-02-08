$(document).ready(function() {
    var selectedActivities = [];
    
    $(".selectable").on("click", function() {
        $(this).toggleClass("selected");
        
        var content = $(this).text();
        var cellIndex = $(this).index();
        var cliffName = $("th").eq(cellIndex).text();
        
        var activity = {
            name: content,
            cliff: cliffName
        };
        
        if ($(this).hasClass("selected")) {
            selectedActivities.push(activity);
        } else {
            selectedActivities = selectedActivities.filter(function(item) {
                return !(item.name === content && item.cliff === cliffName);
            });
        }
        
        updateDisplay();
    });
    
    function updateDisplay() {
        var resultDiv = $("#result");
        
        if (selectedActivities.length === 0) {
            $("#displaySelected").removeClass("show");
            resultDiv.html("<h4>My selected activities to enquire:</h4>");
        } else {
            $("#displaySelected").addClass("show");
            
            var html = "<h4>My selected activities to enquire:</h4>";
            $.each(selectedActivities, function(index, activity) {
                html += "<p>" + activity.name + " <span>at " + activity.cliff + "</span></p>";
            });
            
            resultDiv.html(html);
        }
    }
});