const paralelogram = {
    a: 10,
    b: 20
};

const square = () => {
    document.getElementById("square").innerHTML = 'Square of paralelogram:' + 0.5 * paralelogram.a * paralelogram.b;
};

const onMouse = () => {
    let from3 = document.getElementById("#3").innerText;
    let from6 = document.getElementById("#6").innerText;

    document.getElementById("#3").innerHTML = from6;
    document.getElementById('#6').innerHTML = from3;
};

const maxi = () => {
    const form = document.getElementById('form');
    let arr = form.input.value.split('');
    let maxNum = Math.max.apply(null, arr);
    alert('Максимальне число:' + maxNum);
    document.cookie = "max=" + 'Максимальне число:' + maxNum + ';path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT;domain=.com';
    alert(document.cookie)
}

const eraseCookie = (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const deleteCookie = () => {
    if (document.cookie.split(';').filter((item) => item.trim().startsWith('max=')).length) {
        if (confirm("Want to delete cookies?")) {
            console.log("test");
            eraseCookie("max");
            document.getElementById('form').style.visibility = "visible";
            if (confirm("Cookie is deleted. Do you want to reload the page?")) {
                location.reload();
            }
        }
    } else {
        document.getElementById('form').style.visibility = "visible";
    }
}

const checkCookie = () => {
    if (document.cookie.split(';').filter((item) => item.trim().startsWith('max=')).length) {
        console.log('The cookie "max" exists ')
        alert("Cookie - " + cookie, "після натиснення ОК cookie will be deleted")
        deleteCookie();
    }
    else {
        document.getElementById('form').style.visibility = "visible";
        return;
    }
};



square();