export function platformList() {

    $(document).ready(function () {


        function platformlist() {
            $.ajax({
                type: "POST",
                url: "./JS/xml/availablePlatform.xml",
                dataType: "xml",
                success: function (xml) {

                    $(xml).find('platformname').each(function () {

                        $('.platformlist').append(
                            '<span class="platformName"> |</span><br><span class="platformName"> |->' + $(this).find("name").text() + '</span><br>');
                    });


                }


            });
        }

        platformlist();

        function extraTextThirdColum() {
            $.ajax({
                type: "POST",
                url: "./JS/xml/extraText.xml",
                dataType: "xml",
                success: function (xml) {

                    $(xml).find('ExtraText').each(function () {

                        $('.extraTextBody').append("<span class='extra_body_text'>" +
                            $(this).find("text").text() + "</span>");
                    });


                }


            });
        }


        extraTextThirdColum();


    });

}