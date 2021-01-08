export function projectList() {

    $(document).ready(function () {


        projectlists();

        function projectlists() {

            $.ajax({
                type: "POST",
                url: "./JS/xml/projectlist.xml",
                dataType: "xml",
                success: function (xml) {


                    $(xml).find('project').each(function () {

                        $('.projectlist').append(
                            '<span class="projectName"> |</span><br><span class="projectName"> |->' + $(this).find("name").text() + '</span><br>');
                    });


                }


            });
        }







    });
}