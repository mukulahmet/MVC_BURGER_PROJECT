﻿


function SiparisGonder(id) {

    let SiparisData = {
        MenuID : id,
        /*Boyut: $("input[type='radio']:checked").val(),*/
        Boyut: $('input[name="boyut"]:checked').val(),
        Adet: $('#adet').val(),
        UserID: $('#userID').val(),
        Ekleme: $('#ekleme').val(),
        Sos1ID: $('input[name="sos1"]:checked').val(),
        Sos2ID: $('input[name="sos2"]:checked').val(),

    }

    //let rdo = document.getElementsByName("boyut");
    //for (r of rdo) {
    //    if (r.checked)
    //    alert(r.value)
    //}
    
    alert("++++++++++>>>>>>>>>>>>>>>>>alert"+SiparisData.Boyut);
  
    console.log(SiparisData.Boyut)
    $.ajax({
        url: "/User/Siparis/SiparisGonder",
        type: "POST",
        dataType: "html",
        data: SiparisData,
        success: function (response) {
            console.log(response)
            $('#siparisListesi').html(response);
        },
        error: function (data) {
            console.log("Hata Oluştu")
        }
    })
}
function malzemeEkle(id) {
    let MalzemeData = {
        UserID: $('#userID').val(),
        MalzemeID: id
    }
    $.ajax({
        url: "/User/Siparis/MalzemeDegistir",
        data: MalzemeData,
        dataType: "html",
        type: "post",
        success: function (response) {
            
        }

    })
}
function SepettenSil(siparisID) {
    let sepetData={
        sepetID : siparisID
    }
    $.ajax({
        url: "/User/Siparis/SepettenSil",
        type: "POST",
        dataType: "html",
        data: sepetData,
        success: function (response) {
            console.log(response)
            $('#siparisListesi').html(response);
        },
        error: function (data) {
            console.log("Hata Oluştu")
        }
    })
}
function AdetArttır(siparisID) {
    let AdetArttırData = {
        sepetID: siparisID
    }
    $.ajax({
        url: "/User/Siparis/AdetArttır",
        type: "POST",
        dataType: "html",
        data: AdetArttırData,
        success: function (response) {
            console.log(response)
            $('#siparisListesi').html(response);
        },
        error: function (data) {
            console.log("Hata Oluştu")
        }
    })
}

function SepetTemizle() {
    let SepetTemizleData = {
        userId: $('#userID').val()
    }
    $.ajax({
        url: "/User/Siparis/SepetTemizle",
        type: "POST",
        dataType: "html",
        data: SepetTemizleData,
        success: function (response) {
            console.log(response)
            $('#siparisListesi').html(response);
        },
        error: function (data) {
            console.log("Hata Oluştu")
        }
    })
}

function SepetYukle() {
    let SepetYukleData = {
        userId: $('#userID').val()
    }
    $.ajax({
        url: "/User/Siparis/SepetYukle",
        type: "POST",
        dataType: "html",
        data: SepetYukleData,
        success: function (response) {
            console.log(response)
            $('#siparisListesi').html(response);
        },
        error: function (data) {
            console.log("Hata Oluştu")
        }
    })
}



