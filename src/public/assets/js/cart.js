var giohang = new Array()

document.getElementById('showgiohang').style.display = "none"

function addToCart(e){
    var box = e.parentElement.children;
    var ten = box[1].innerText;
    var soluong = parseInt(box[3].value);
    var gia = box[4].innerText;
    

    var item = new Array(ten,soluong,gia)

    //kiểm tra giỏ hàng
    var k = 0;


    for(let i= 0; i < giohang.length; i++){
        if(giohang[i][0] == ten){
            k = 1;
            soluong += parseInt(giohang[i][1])
            giohang[i][1] = soluong
            break;
        }
    }
    if(k == 0){
         giohang.push(item)
    }
   
    
    
    showlenghgiohang()
    showgiohang()

}

function thanhtoan(){
    sessionStorage.setItem("giohang", JSON.stringify(giohang))
}

function showlenghgiohang(){
    var count = giohang.length
    document.getElementById("soluonghang").innerHTML = count
}

function showgiohang(){
    var strcart =""
    var sum = 0
    var giagiaohang = 0
    var tongtien = 0
    for(let i= 0; i < giohang.length; i++){
        
        let ten = giohang[i][0]
        let soluong = giohang[i][1]
        let gia = giohang[i][2]
        let tien = gia * soluong
        tongtien += tien
        sum += tien
        strcart += "<tr>"
        strcart += '<td class="product-remove">'+ 
                    '<i class="far fa-window-close" onclick="xoa(this)"></i>'
                    +'</td>'
        strcart += "<td>"+ (i+1) +"</td>"
        strcart += "<td>" + ten + "</td>"
        strcart += "<td>" + gia + "</td>"
        strcart += "<td>"+ soluong + "</td>"
        strcart += "<td>" + tien + "</td>"
        strcart += "</tr>"
    }

    if(sum >=100000 || sum ==0){
        giagiaohang = 0
    }else{
        giagiaohang = 30000
    }


    sum += giagiaohang 
    
    document.getElementById("tien").innerHTML = tongtien
    document.getElementById("giagiaohang").innerHTML = giagiaohang
    document.getElementById("giohangchitiet").innerHTML = strcart
    document.getElementById("sum").innerHTML = sum
}

function showhidecart(){
    var c = document.getElementById('showgiohang')

    if(c.style.display == "" ){
        c.style.display = "none"
    }else{
        c.style.display = "" 
    }
}

function showgiohang_trangthanhtoan(){
    var gh = sessionStorage.getItem("giohang")
    var giohang = JSON.parse(gh)

    var strcart =""
    var sum = 0
    var giagiaohang = 0
    var tongtien = 0
    for(let i= 0; i < giohang.length; i++){
        
        let ten = giohang[i][0]
        let soluong = giohang[i][1]
        let gia = giohang[i][2]
        let tien = gia * soluong
        tongtien += tien
        sum += tien
        strcart += "<tr>"
        strcart += "<td>"+ (i+1) +"</td>"
        strcart += "<td>" + ten + "</td>"
        strcart += "<td>" + gia + "</td>"
        strcart += "<td>"+ soluong + "</td>"
        strcart += "<td>" + tien + "</td>"
        strcart += "</tr>"
    }
    if(sum >=30000 || sum ==0){
        giagiaohang = 0
    }else{
        giagiaohang = 30000
    }


    sum += giagiaohang 


    
    
    document.getElementById("tien1").innerHTML = tongtien
    document.getElementById("giagiaohang1").innerHTML = giagiaohang
    document.getElementById("giohangchitiet1").innerHTML = strcart
    document.getElementById("sum1").setAttribute('value', sum)
        
}

function xoa(e){
    var tr = e.parentElement.parentElement
    var ten = tr.children[2].innerText
    tr.remove()
    
    for(let i= 0; i < giohang.length; i++){
        if(giohang[i][0] == ten){
            giohang.splice(i,1)
        }
    }
    showlenghgiohang()
    showgiohang()
    
}

function xoatatca(){
    giohang = []
    showlenghgiohang()
    showgiohang()
    
}
 


showgiohang_trangthanhtoan()



