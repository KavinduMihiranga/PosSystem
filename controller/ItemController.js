$("#txtItemCode").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemName").focus();

    }
});
$("#txtItemName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemPrice").focus();

    }
});
$("#txtItemPrice").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemQty").focus();

    }
});
$("#txtItemQty").keydown(function (event) {
    if (event.key == "Enter") {
        saveItem();

    }

});

// CRUD
$("#btnAddItem").click(function () {
    saveItem();
});
function loadAllItems() {
    $('#itemTable').empty();
    for (var i of itemDB) {
        let row = `<tr><td>${i.code}</td><td>${i.name}</td><td>${i.price}</td><td>${i.qty}</td></tr>`;
        $("#itemTable").append(row);
    }

}
function saveItem() {
    $("#itemTable>tr").off("click");
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQty = $("#txtItemQty").val();

    if (confirm("Do You Want To Add This Item..? ")) {

        alert("Add Item Successfully.!");

    } else {
        alert("Cancel Customer Item !");
    }

    var itemObject = {
        code: itemCode,
        name: itemName,
        price: itemPrice,
        qty: itemQty
    };
    itemDB.push(itemObject);
    $('#itemTable').empty();
    for (var i of itemDB) {
        let row = `<tr><td>${i.code}</td><td>${i.name}</td><td>${i.price}</td><td>${i.qty}</td></tr>`;
        $("#itemTable").append(row);
        clearAllItem();

    }


    $("#itemTable>tr").click(function () {
        let itemsId = $(this).children(":eq(0)").text();
        let itemsName = $(this).children(":eq(1)").text();
        let itemsPrice = $(this).children(":eq(2)").text();
        let itemsQty = $(this).children(":eq(3)").text();

        $("#txtItemCode").val(itemsId);
        $("#txtItemName").val(itemsName);
        $("#txtItemPrice").val(itemsPrice);
        $("#txtItemQty").val(itemsQty);

    });

}

function clearAllItem() {
    $('#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty').val("");
    $('#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty').css('border', '2px solid #ced4da');
    $('#txtItemCode').focus();
    $("#btnAddItem").attr('disabled', true);
    loadAllItems();
    $("#errorCode,#errorItemName,#errorPrice,#errorPrice").text(" ")
}


$("#btnUpdateItem").click(function () {
    updateItem();
});

function updateItem() {
    var newItemCode = $("#txtItemCode").val();
    var newItemName = $("#txtItemName").val();
    var newItemPrice = $("#txtItemPrice").val();
    var newItemQty = $("#txtItemQty").val();


    if (confirm("Do You Want To Update This Item..?")) {

        $("td:eq(0)").text(newItemCode);
        $("td:eq(1)").text(newItemName);
        $("td:eq(2)").text(newItemPrice);
        $("td:eq(3)").text(newItemQty);

        alert("Update Item Successfully.!");

    } else {
        alert("Cancel Item Update !");

    }
}
$("#btnDeleteItem").click(function () {
    deleteItem();
});
function deleteItem() {
    // var delItemCode = $("#txtItemCode").val("");
    // var delItemName = $("#txtItemName").val("");
    // var delItemPrice = $("#txtItemPrice").val("");
    // var delItemQty = $("#txtItemQty").val("");


    if (confirm("Do You Want To Update This Item..?")) {

        $("td:eq(0)").remove();
        $("td:eq(1)").remove();
        $("td:eq(2)").remove();
        $("td:eq(3)").remove();

        alert("Delete Item Successfully.!");

    } else {
        alert("Cancel Item Delete !");

    }

}

function searchItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            return itemDB[i];
        }
    }
}

$('#btnSearchItem').click(function () {
    var searchCode = $('#txtSearchItem').val();

    var response = searchItem(searchCode);
    if (response) {
        $('#txtItemCode').val(response.code);
        $('#txtItemName').val(response.name);
        $('#txtItemPrice').val(response.price);
        $('#txtItemQty').val(response.qty);
    }
})


// VALIDATION
var regExItemCode = /^(I00-)[0-9]{3,4}$/;

$("#txtItemCode").keyup(function () {
    let input = $("#txtItemCode").val();
    if (regExItemCode.test(input)) {
        $("#txtItemCode").css('border', '2px solid green');
        $("#errorCode").text("");
        $("#btnAddItem").prop("disabled", false);

    } else {
        $("#txtItemCode").css('border', '2px solid red');
        $("#errorCode").text("Wrong format : I00-001");
        $("#btnAddItem").prop("disabled", true);

    }
});

var regExItemName = /^[a-zA-Z ]+$/;

$("#txtItemName").keyup(function () {
    let input = $("#txtItemName").val();
    if (regExItemName.test(input)) {
        $("#txtItemName").css('border', '2px solid green');
        $("#errorItemName").text("");
        $("#btnAddItem").prop("disabled", false);

    } else {
        $("#txtItemName").css('border', '2px solid red');
        $("#errorItemName").text("Wrong format : Type Item Name");
        $("#btnAddItem").prop("disabled", true);

    }
});

var regExItemPrice = /^\d{0,8}(\.\d{1,2})?$/;

$("#txtItemPrice").keyup(function () {
    let input = $("#txtItemPrice").val();
    if (regExItemPrice.test(input)) {
        $("#txtItemPrice").css('border', '2px solid green');
        $("#errorPrice").text("");
        $("#btnAddItem").prop("disabled", false);

    } else {
        $("#txtItemPrice").css('border', '2px solid red');
        $("#errorPrice").text("Wrong format : Type Item Price");
        $("#btnAddItem").prop("disabled", true);

    }
});

var regExItemQty = /^\d{0,8}(\.\d{1,3})?$/;

$("#txtItemQty").keyup(function () {
    let input = $("#txtItemQty").val();
    if (regExItemQty.test(input)) {
        $("#txtItemQty").css('border', '2px solid green');
        $("#errorQty").text("");
        $("#btnAddItem").prop("disabled", false);

    } else {
        $("#txtItemQty").css('border', '2px solid red');
        $("#errorQty").text("Wrong format : Type Item Qty");
        $("#btnAddItem").prop("disabled", true);

    }
});

$('#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQty').on('keydown', function (eventObj) {
    if (eventObj.key == "Tab") {
        eventObj.preventDefault();
    }
});