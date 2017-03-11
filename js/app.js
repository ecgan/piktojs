(function () {

    $(document).ready(function () {
        getImages();

        let html = localStorage.getItem("html");
        if (html != null || html != "") {
            $(".block").html(html);
            $(".draggable").draggable({ containment: "parent" });
        }
    });

    function getImages() {
        $.getJSON("/images/", function (data) {
            let images = $(".images");
            images.children().remove();

            for (let i = 0; i < data.length; i++) {
                images.append('<li><img src="' + data[i] + '" class="img-rounded" onclick="addImage(this.currentSrc)" /></li>');
            }
        });
    }

    $("#submit").click(function () {
        let file = $(".fileInput")[0].files[0];
        let formData = new FormData();
        formData.append('upload', file);

        $.ajax({
            url: '/uploads',
            type: 'POST',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success: function (data) {
                getImages();
            }
        });
    });

    $("#addText").click(function () {
        let text = prompt("Enter your text");
        if (text != null) {
            addText(text);
        }
    });

    $("#save").click(function () {
        let html = $(".block").html();
        localStorage.setItem("html", html);
    });
})();

let addText = function (text) {
    $(".block").append('<div class="item draggable" style="top:2px; left:2px" ><div class="close" onclick="removeItem(this)">X</div><span>' + text + '</span></div>');
    $(".draggable").draggable({ containment: "parent" });
};

let addImage = function (url) {
    $(".block").append('<div class="item draggable" style="top:2px; left:2px" ><div class="close" onclick="removeItem(this)">X</div><image src="' + url + '"></image></div>');
    $(".draggable").draggable({ containment: "parent" });
};

let removeItem = function (obj) {
    $(obj).parent().remove();
};