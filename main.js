// task 2
const paralelogram = {
    a: 10,
    b: 20
};

const square = () => {
    document.getElementById("square").innerHTML = 'Square of paralelogram:' + 0.5 * paralelogram.a * paralelogram.b;
};
square();
//  ============================= task 5 and 1 =============================================
const onMouse = () => {
    let from3 = document.getElementById("#3").innerText;
    let from6 = document.getElementById("#6").innerText;

    document.getElementById("#3").innerHTML = from6;
    document.getElementById('#6').innerHTML = from3;
};

// ===================================== task 3 ======================================================
const maxi = () => {
    const form = document.getElementById('form');
    let arr = form.input.value.split('');
    let maxNum = Math.max.apply(null, arr);
    alert('Максимальне число:' + maxNum);
    document.cookie = "max=" + 'Максимальне число:' + maxNum + ';path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT;domain=https://johnykovalenko1337.github.io/Labs_web/main;';
    console.log("cookie:" + document.cookie)
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
    if (document.cookie !== "") {
        console.log('The cookie "max" exists ')
        alert("Після натиснення ОК cookie will be deleted")
        deleteCookie();
    }
    else {
        document.getElementById('form').style.visibility = "visible";
        return;
    }
};

// ==================================== task 4 ==============================================
const checkStorage = () => {
    let check = document.getElementById('ch1');
    if (check.checked) {
        localStorage.setItem('checked', true);
    }
    else {
        localStorage.setItem('checked', false);
    }
    goAlignRight();
};


const goAlignRight = () => {
    if (localStorage.getItem('checked') === 'true') {
        document.getElementById('left').style.textAlign = 'right';
        document.getElementById('right').style.textAlign = 'right';
    }
    else {
        document.getElementById('left').style.textAlign = 'center';
        document.getElementById('right').style.textAlign = 'center';
    }
};

// ================================= task 6 ==============================
const addText = () => {
    document.getElementById('spany').innerHTML = document.getElementById('add').value;
};

const saveText = () =>{
    let text = document.getElementById('spany').innerText;
    localStorage.setItem('texty', text)
    localStorage.setItem('textFlag', true);
    document.getElementById('textChanging').innerText = localStorage.getItem('texty');
};

const storage = () => {
    if (localStorage.getItem('textFlag') === 'true') {
        document.getElementById('textChanging').innerText = localStorage.getItem('texty');
    }
}

const deleteFromLocalStorage = () =>{
    localStorage.setItem('textFlag', 0);
    location.reload();
}


