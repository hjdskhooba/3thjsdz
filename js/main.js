const num1 = 5
const num2 = 6

function int() {
    if(num1 < num2){
        console.log(num1 + ' less than second');
    }else{
        console.log(num2 + ' less than first');
    }
}
int();

//2

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4, 5];

function twoMass(){
    if(arr1.length < arr2.length){
        console.log('second is longer');
    }else{
        console.log('first is longer');
    }
};
twoMass();

//3

const fword = prompt('Enter the first word');
function countChar(){
    if (fword.length > 0) {
        alert(fword.length);
    }
}
countChar();