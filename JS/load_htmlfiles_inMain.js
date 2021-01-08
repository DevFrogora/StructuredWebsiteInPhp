export function loadHtmlFiles(){
    
    $(document).ready(function () {

    $("#middleColumn").load("./content/lms/main_middle_content.html");
    $(".resourceSection_inside").load("./content/lms/resource_content.html");
});

}
