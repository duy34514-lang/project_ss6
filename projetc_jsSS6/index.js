let loginName = "vua chúa" ;
let loinPass = "bố là vua" ;
let books = [] ;
let bunker = ["sách truyệ", "lọ vuowg chí tôn"] ;
let cnt = 0 ;
let choi ;
do {
    let name = prompt(`tên đăng nhập`) ;
    let pass = prompt(`mật khẩu`) ;
    if ( name == loginName && pass == loinPass ) {
        break ;
    } else if ( name != loginName || pass != loinPass ) {
        cnt++ ;
        alert(`sai lần ${cnt+1}, nhập lại`) ;
    }
}while (cnt < 3) ;
if ( cnt < 3 ) {
    alert("Đăng nhập thành công") ;
    let choi = +prompt(`=== QUẢN LÝ THƯ VIỆN ===
        1. Nhập thêm lô sách mới
        2. Hiển thị danh sách sách
        3. Tìm kiếm sách
        4. Cập nhật tên sách
        5. Đảo ngược thứ tự kệ sách
        6. Nhập kho từ nguồn khác
        7. Thoát chương trình
        `) ;
    do {
        switch (choi) {
            case 1 :
                let backage = "" ;
                backage = +prompt("nhập kiện hàng cách nhau dấu ',' ") ;
                books = backage.split(",") ;
                break ;
            case 2 :
                for ( let l = 0 ; l < books.length ; l++ ) {
                    console.log(`${l+1}: ${books[l]}`);
                }
                break ;
            case 3 :
                let seachBook = prompt("nhập tên sách muốn tìm") ;
                let flag = 0;
                for ( let j = 0 ; j < books.length ; j++ ) {
                    for ( let u = 0 ; u < books.length ; u++ ) {
                        books[u] = books[u].toLowerCase()
                    }
                    seachBook.toLowerCase() ;
                    if ( books[j].includes(seachBook) ) {
                        alert(`sách ${seachBook} có trong thư viện ơ vị trí ${j+1}`) ;
                        flag = 1 ;
                    }
                }
                if (flag == 0) {
                    alert("không có sách trong thư viện") ;
                }
                break ;
            case 4 :
                flag = 0 ;
                let updateBook = prompt("nhập tên sách muốn tìm") ;
                for ( let k = 0 ; k < books.length ; k++ ) {
                    for ( let u = 0 ; u < books.length ; u++ ) {
                        books[u] = books[u].toLowerCase()
                    }
                    updateBook.toLowerCase() ;
                    if ( books[k].includes(updateBook) ) {
                        alert(`sách ${updateBook} có trong thư viện ở vị trí ${k+1}`) ;
                        updateBook[k] = prompt("bạn muổn dổi thành") ;
                        flag = 1 ;
                    }
                }
                if (flag == 0) {
                    alert("không có sách trong thư viện") ;
                }
                break ;
            case 5 : 
                books.reverse() ;
                break ;
            case 6 :
                books.concat(bunker) ;
                alert("nhập kho thành công") ;
                break ;
            case 7 :
                alert("cút") ;
                break ;
        }
    }while (1) ;
} else alert("cút") ;
