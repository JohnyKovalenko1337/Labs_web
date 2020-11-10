const paralelogram = {
    a: 10,
    b: 20
};

const square = () => {
    document.getElementById("square").innerHTML = 'Square of paralelogram:' + 0.5 * paralelogram.a * paralelogram.b;
};
square();

const onMouse = () => {
    let from3 = document.getElementById("#3").innerText;
    let from6 = document.getElementById("#6").innerText;

    document.getElementById("#3").innerHTML = from6;
    document.getElementById('#6').innerHTML = from3;
};

const task5 = async () => {
    const form = document.getElementById('form');
    let arr = form.input.value.split('');
    let sortedArray = await selectionSort([3,5,1,6,4]);
   console.log(sortedArray)

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
        let temp = array[j];
        array[j] = array[min_index];
        array[min_index] = temp;

    }
    return array;
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
task5();