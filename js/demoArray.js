/**
 * Các số tự nhiên từ 1-10
 */

//Kiểu biến mới để chứa được nhiều giá trị
//2 kiểu biến chứa được nhiều giá trị
//array
//object

//!* array
//! syntax tenBien =[value1, value2, value3]
const numberArr = [1,2,3,4,5,6]
console.log(numberArr)

let nameArr =["Khách hàng 1","Khách hàng 2","Khách hàng 3"]
console.log(nameArr)

let foodArr = [`🥞`,`🍧`,`🍊`] 
console.log(foodArr)

//! Độ dài của mảng (length): số lượng giá trị được chứa trong mảng
//Phần tử của mảng
console.log(foodArr.length)

//! Vị trí (index) phần tử trong mảng
//ele đầu tiên => index = 0;
console.log(foodArr[0]);//Phần tử đầu tiên
//ele cuối cùng => index < length - 1
console.log(foodArr[foodArr.length-1]);//Phần tử cuối cùng của mảng

//! duyệt mảng, để lấy từng giá trị của mảng 
//dùng vòng lặp for để lấy từng phần tử của mảng
for (let index = 0; index < foodArr.length; index++) {
    console.log(foodArr[index]);
}
