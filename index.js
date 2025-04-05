function getinput() {
    var inputVal = document.getElementById('form-scream').value;
    const usertexth3 = document.getElementById('usertext');
    const d = new Date();
    usertexth3.innerText = "You have successfully registered for the youth summit " + inputVal + " " + " at " + d;
};



const anothertextp = document.getElementById('anothertext');
let x = Math.floor(Math.random() * 2001 );
anothertextp.innerText = "Your ID Number is YOUTH2025ID234" + x;

const signUpinput = document.getElementById('SignupButton');
const signUpdiv = document.getElementById('signUp');
const signOndiv = document.getElementById('signOn');

signUpinput.addEventListener('click', function () {
    signUpdiv.style.display = 'none';
    signOndiv.style.display = 'block';
});

(function () {
    var header = document.getElementById('sign-on-header');
    var theTime = (new Date()).getHours();
    /* Good Morning from 3AM to 11AM */
    if (theTime >= 3 && theTime <= 11) {
        header.innerText = "Good morning";
    } else if (theTime >= 12 && theTime <= 17) /* Good Afternoon from 12PM to 17PM */ {
        header.innerText = "Good afternoon";
    } else /* Good Evening */ {
        header.innerText = "Good evening";
    }
})();
