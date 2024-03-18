/**
 * Process:
 * dom tới từng td
 *  dom theo class, tag-name
 *  dom theo class => trả về 1 arr
 * đưa vào 1 cái list
 * 
 * Outputs:
 * 
 */
let listScores = [];

function getListScores() {
    let scores = document.getElementsByClassName("td-scores")
    console.log("Danh sách các td", scores);

    for (let i = 0; i < scores.length; i++) {
        //duyệt ds chứa các thẻ <td></td>
        let column = scores[i];
        //lấy giá trị bên trong <td></td>
        let score = column.innerHTML * 1;
        //push các giá trị vào listScores
        listScores.push(score);
    }
}
getListScores();
console.log(listScores)

//trong tblBody có dòng tr
//tên sinh viên nằm trong cột td
//trong cột có tên sinh viên
let tbody = document.getElementById("tblBody");

//duyệt tr trong tbody
// for (let i = 0; i < tbody.rows.length; i++) {
//     let row = tbody.rows[i];
//     let name = row.cells[2].innerHTML;
//     console.log(name);    
// }


/**
 * Tìm SV có DTB cao nhất
 * Inputs
 * 
 * Process:
 * dom tới btn
 * giải thuật:
 * giả sử: duyệt ds, ngay phần tử đầu tiên là số lớn nhất
 * sau đó, các phần tử i = 1, 2, 3 .. đem so sánh với phần tử đầu tiên i = 0
 * 0. tạo biến max gán giá trị là listScores[0]
 * 1. Tạo biến index = 0 
 * 2. so sánh, duyệt mảng từ i thứ 1
 * 2.1. lấy được giá trị từng ele trong mảng (score)
 * 2.2. Nếu max < score
 * => true  => gán lại giá trị mới cho biến max = score
 *          => gán lại i cho index
 * 
 * Outputs:
 * max: điểm cao nhất
 * SV điểm tb cao nhất
 * 
 */

document.getElementById("btnSVCaoDiemNhat").onclick = function () {
    let max = listScores[0];
    let index = 0;
    for (let i = 1; i < listScores.length; i++) {
        let score = listScores[i];
        if (max < score) {
            max = score
            index = i
        }
    }
    console.log(max);
    // console.log(index);

    //lấy tên SV
    let name = tbody.rows[index].cells[2].innerHTML
    console.log(name)
    let result = name + " là SV có điểm tb là: " + max;
    console.log(result)
    document.getElementById("svGioiNhat").innerHTML = result;
}

/**
 * Đếm số SV giỏi
 * 0.tạo biến đếm count = 0
 * 1.duyệt mảng listScores từ i thứ 0
 * 1.1. Lấy được giá trị từng phần tử trong mảng (score)
 * 1.2. Nếu score lớn hơn hoặc bằng 8;
 *  => true => tăng count lên 1 đơn vị
 * 2.Show kết quả
 * 
 */

document.getElementById("btnSoSVGioi").onclick = function () {
    let count = 0;
    //duyệt mảng
    for (let i = 0; i < listScores.length; i++) {
        //lấy được giá trị các ele
        let score = listScores[i];
        //kiểm tra điều kiện
        if (score >= 8) {
            count++
        }
    }
    let result = "Có " + count + " Sinh viên giỏi"
    document.getElementById("soSVGioi").innerHTML = result;
}


/**
 * DSSV có dTB > 5
 * 0. tạo biến content = ""
 * 1. duyệt mảng
 * 1.1. lấy được giá trị ele trong mảng => score
 * 1.2. Nếu score > 5
 * => true =>
 *      1.2.1. score
 *      1.2.2. name
 *      1.2.3. tạo biến result: name - score
 *      1.2.3. tích lũy vào biến content (+=)
 * 2.show kết quả
 * 
 * 
 * Outputs:
 *  dsSVDiemHon5
 *  type: string
 * 
 */

document.getElementById("btnSVDiemHon5").onclick = function () {
    let content = "";

    for (let i = 0; i < listScores.length; i++) {
        let score = listScores[i];
        if (score > 5) {
            let name = tbody.rows[i].cells[2].innerHTML;
            let result = name + " - " + score;
            content += result + "<br/>";
        }

    }
    
    document.getElementById("dsDiemHon5").innerHTML=content;
}


