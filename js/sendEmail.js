function sendMess() {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    if (name == '' || email == '' || subject == '' || message == '') {
        inputEmpty();
    } else {
        let params = {
            Subject: subject,
            from_name: name,
            to_name: "Hnin Inzali",
            email: email,
            message: message,
        }
        emailjs.send("service_p93dvrf", "template_p2nazgk", params);
        success();
    }
};


function success() {
    swal({
        title: "Good job!",
        text: "The email successfully sent !",
        icon: "success",
        button: "OK",
    });
}

function error() {
    swal({
        title: "Something wrong!",
        text: "Message could not sent !",
        icon: "error",
        button: "Try again!",
    });
}

function inputEmpty() {
    swal({
        title: "Oops...!",
        text: "Input fields are required !",
        icon: "error",
        button: "Try again!",
    });
}