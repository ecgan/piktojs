(function () {

    $(document).ready(function () {
        getImages();

        // load the stored html from localStorage 
        // and inject it into the block div.  
        let html = localStorage.getItem("html");
        if (html != null || html != "") {
            $(".block").html(html);
            $(".draggable").draggable({ containment: "parent" });
        }
    });

    function getImages() {
        $.getJSON("/images/", function (data) {
            for (let i = 0; i < data.length; i++) {
                addThumbnail(data[i]);
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
                addThumbnail(data.file);
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
        // get the html from the block div
        // and save it into localStorage. 
        // The html will be loaded when browser does a page refresh.
        let html = $(".block").html();
        localStorage.setItem("html", html);
    });
})();

let addThumbnail = function (url) {
    let images = $(".images");
    images.append('<li><img src="' + url + '" class="img-rounded" onclick="addImage(this.currentSrc)" /></li>');
};

let addText = function (text) {
    $(".block").append('<div class="item draggable" style="top:2px; left:2px" ><div class="close" onclick="removeItem(this)">X</div><span>' + text + '</span></div>');
    
    // use the jquery ui draggable.
    $(".draggable").draggable({ containment: "parent" });
};

let addImage = function (url) {
    $(".block").append('<div class="item draggable" style="top:2px; left:2px" ><div class="close" onclick="removeItem(this)">X</div><image src="' + url + '"></image></div>');
    
    // use the jquery ui draggable.
    $(".draggable").draggable({ containment: "parent" });
};

let removeItem = function (obj) {
    $(obj).parent().remove();
};