/*
	With HTML5 you CAN make file uploads with Ajax and Jquery. 
	Not only that, you can do file validations(name,size,MIME-type) 
	or handle the progress event with the html5 progress tag(or a div). 
*/


// First you can do some validation if you want. For example in the onChange event of the file.

$(':file').change(function(){
    var file = this.files[0];
    name = file.name;
    size = file.size;
    type = file.type;
    //your validation
});

// Now the Ajax submit with the button's click.

$(':button').click(function(){
	console.log('Clicked');
    var formData = new FormData($('form')[0]);
    $.ajax({
        url: 'upload.php',  //server script to process data
        type: 'POST',
        xhr: function() {  // custom xhr
            myXhr = $.ajaxSettings.xhr();
            if(myXhr.upload){ // check if upload property exists
                myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // for handling the progress of the upload
            }
            return myXhr;
        },
        //Ajax events
        beforeSend: beforeSendHandler,
        success: completeHandler,
        error: errorHandler,
        // Form data
        data: formData,
        //Options to tell JQuery not to process data or worry about content-type
        cache: false,
        contentType: false,
        processData: false
    });
});

// Now if you want to handle the progress.

function progressHandlingFunction(e){
    if(e.lengthComputable){
        $('progress').attr({value:e.loaded,max:e.total});
    }
}

function beforeSendHandler(e) {

}

function completeHandler(e) {

}

function errorHandler(e) {

}

