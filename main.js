
// ====================================== task 3 ===========================================
const task3 = () => {
    const div = document.getElementById('github');
    const owner = 'JohnyKovalenko1337';
    const repo = 'Labs_web';
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*'
        }
    })
        .then(result => {
            console.log(result);
        
            //div.innerText(xd+" : "+ xd);
        })
        .catch(err => {
            //div.innerText(xd+" : "+ xd);
        })

};
// =================================== task 5 =================================================
const task5 = async () => {
    const form = document.getElementById('form');
    let arr = form.input.value.split(',');
    let sortedArray = await selectionSort(arr);
    sortedArray.forEach(element => {
        console.log(element);
    });
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
    }
    else {
        document.getElementById('left').style.textAlign = 'center';
        document.getElementById('right').style.textAlign = 'center';
    }
};
