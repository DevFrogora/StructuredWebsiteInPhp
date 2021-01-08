
export function pagePath() {
    
    $(document).ready(function () {


        setPagePath();

        function setPagePath() {

            $.ajax({
                type: "POST",
                url: "./JS/xml/pagepath.xml",
                dataType: "xml",
                success: function (xml) {

                    let selectednode = $(xml).find("LibraryManagememtSystem");
                    let main = $(selectednode).find("main");

                    $('.page_path').append(" / <a href=" + $(main).find("link").text() + ">" + $(main).find("text").text() + "</a> ");



                }


            });
        }



    });

}