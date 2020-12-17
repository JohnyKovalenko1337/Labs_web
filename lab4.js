// ==================================== task 1 ==============================================
const first = document.getElementById('xx1');
const second = document.getElementById("xx2");
const third = document.getElementById("xx3");
const fourth = document.getElementById("xx4");
const fifth = document.getElementById("xx5");
const sixth = document.getElementById("xx6");

const delay = 2000;

let parts = [first, second, third, fourth, fifth, sixth];
let partsHtml = [];

for (let i = 0; i < parts.length; i++) {
    partsHtml.push(parts[i].innerHTML);
}

const task1 = () => {

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            parts[i].innerHTML = i === 5 ? partsHtml[0] : partsHtml[i + 1];
        }, 500 + i * delay);
    }
}
task1();
// ==================================== task 2 ==============================================
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
        setInterval(() => {
            document.getElementById('forbold').style.fontWeight = "bold"
        }, 5000);
        setInterval(() => {
            document.getElementById('forbold').style.fontWeight = "normal"
        }, 10000)
    }
    else {
        document.getElementById('left').style.textAlign = 'center';
        document.getElementById('right').style.textAlign = 'center';
    }
};

// ====================================== task 3 ===========================================
const task3 = () => {
    const div = document.getElementById('github');
    const owner = 'JohnyKovalenko1337';
    const repo = 'Labs_web';
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
        method: "GET",
    })
        .then(result => {
            return result.json();
        })
        .then(res => {
            const result = JSON.stringify(res);
            const parsedRes = JSON.parse(result);
            console.log(parsedRes);
            let text = "";
            parsedRes.forEach(el => {
                text += el.commit.author.name + " : " + el.commit.message + '            ';
            })
            div.innerText = text;
        })
        .catch(err => {
            div.innerText = "Error : " + err;
        })

};


// ==================================== task 4 ==============================================
const task4 = (callback1, callback2) => {
    console.log('start');
    return callback1(callback2);
}

const callback1 = (callback2) => {
    console.log("from callback 1");
    return callback2();
}

const callback2 = () => {
    console.log("from callback 2")
}

task4(callback1, callback2);
// =================================== task 5 =================================================
const task5 = async () => {
    const form = document.getElementById('form');
    let arr = form.input.value.split(',');
    let array = [];
    arr.forEach(el=>{
        let newy = parseInt(el);
        if(!isNaN(newy)){
            array.push(newy);

        }
    })
    let sortedArray = await selectionSort(array);
    let text = "";
    sortedArray.forEach(element => {
        text += element + " ";
    });
    alert(text);
}

const selectionSort = (array) => {
    let i, j, min_index;

    for (i = 0; i < array.length; i++) {
        min_index = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[min_index]) {
                min_index = j;
            }

        }
        let temp = array[i];
        array[i] = array[min_index];
        array[min_index] = temp;
    }
    return array;
};