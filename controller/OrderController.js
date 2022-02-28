disableLbl();
$('#txtOrderId').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderDate').focus();
    }
});

$('#txtOrderDate').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderCustomer').focus();
    }
});

$('#txtOrderCustomer').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderCustomerId').focus();
    }
});

$('#txtOrderCustomerId').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderCustomerAddress').focus();

    }
});

$('#txtOrderItemCodes').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderItemSellName').focus();
    }
});

$('#txtOrderItemSellName').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtOrderQuantity').focus();
    }
});

$('#txtOrderQuantity').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtQuantityOnHand').focus();
    }
});

$('#txtQuantityOnHand').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtItemSellPrice').focus();
    }
});

$('#txtItemSellPrice').keydown(function (event) {
    if (event.key == "Enter") {
        $('#txtItemSellDiscount').focus();

    }
});
$('#txtItemSellDiscount').keydown(function (event) {
    if (event.key == "Enter") {
        saveOrderItem();
    }
});
//Variable

//CRUD Operation


$('#btnOrderAddItem').click(function () {
    saveOrderItem();
})

function saveOrderItem() {

    $('#orderTable>tr').off("click");

    let orderItemCodes = $('#txtOrderItemCodes').val();
    let orderItemSellName = $('#txtOrderItemSellName').val();
    let orderQuantity = $('#txtOrderQuantity').val();
    let orderQuantityOnHand = $('#txtQuantityOnHand').val();
    let orderItemSellPrice = $('#txtItemSellPrice').val();
    let orderItemSellDiscount = $('#txtItemSellDiscount').val();

    let totalPrice = (orderItemSellPrice - orderItemSellDiscount) * orderQuantity;


    // $('#orderTable').empty();

    let orderDetailObject = {

        oItemCodes: orderItemCodes,
        oItemSellName: orderItemSellName,
        oQuantity: orderQuantity,
        oQuantityOnHand: orderQuantityOnHand,
        oItemSellPrice: orderItemSellPrice,
        oItemSellDiscount: orderItemSellDiscount,
        oTotalPrice: totalPrice
    };
    orderDetailDB.push(orderDetailObject);
    $('#orderTable').empty();
    for (var i of orderDetailDB) {
        let row = `<tr><td>${i.oItemCodes}</td><td>${i.oItemSellName}</td><td>${i.oItemSellPrice}</td><td>${i.oItemSellDiscount}</td><td>${i.oQuantity}</td><td>${i.oTotalPrice}</td></tr>`;
        $("#orderTable").append(row);
        $('#lblSubTotalPrice').val(totalPrice);
    }


    let totalPrices = (orderDetailObject.oItemSellPrice - orderDetailObject.oItemSellDiscount) * orderDetailObject.oQuantity;
    let totalDiscount = (orderDetailObject.oItemSellDiscount * orderDetailObject.oQuantity);
    let totalQty = (orderDetailObject.oQuantity)


    $('#lblTotalPrice').val(totalPrices);
    $('#lblTotalDiscount').val(totalDiscount);
    $('#lblTotalQty').val(totalQty);



}


$('#buttonAddOrder').click(function () {
    if (confirm("Do You Want To Add This Order..? ")) {

        alert("Add Order Successfully.!");

    } else {
        alert("Cancel Add Order !");
    }
    saveOrder();
    clearAll();
});

function saveOrder() {


    let orderId = $('#txtOrderId').val();
    let orderCustomerDate = $('#txtOrderDate').val();
    let orderCustomerName = $('#txtOrderCustomer').val();
    let orderCustomerId = $('#txtOrderCustomerId').val();
    let orderCustomerAddress = $('#txtOrderCustomerAddress').val();


    let orderItemCodes = $('#txtOrderItemCodes').val();
    let orderItemSellName = $('#txtOrderItemSellName').val();
    let orderQuantity = $('#txtOrderQuantity').val();
    let orderQuantityOnHand = $('#txtQuantityOnHand').val();
    let orderItemSellPrice = $('#txtItemSellPrice').val();
    let orderItemSellDiscount = $('#txtItemSellDiscount').val();


    let orderObject = {
        orderId: orderId,
        orderCustomerDate: orderCustomerDate,
        orderCustomerName: orderCustomerName,
        orderCustomerId: orderCustomerId,
        orderCustomerAddress: orderCustomerAddress,

        orderItemCodes: orderItemCodes,
        orderItemSellName: orderItemSellName,
        orderQuantity: orderQuantity,
        orderQuantityOnHand: orderQuantityOnHand,
        orderItemSellPrice: orderItemSellPrice,
        orderItemSellDiscount: orderItemSellDiscount

    };
    orderDB.push(orderObject);
    //
    // let totalPrice = (orderObject.orderItemSellPrice - orderObject.orderItemSellDiscount) * orderObject.orderQuantity;
    // let totalDiscount = (orderObject.orderItemSellDiscount * orderObject.orderQuantity);
    // let totalQty = (orderObject.orderQuantity)
    //
    // $('#lblTotalPrice').val(totalPrice);
    // $('#lblTotalDiscount').val(totalDiscount);
    // $('#lblTotalQty').val(totalQty);

    $('#orderTable').remove();
}

function searchOrderCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            return customerDB[i];
        }
    }
}


$('#txtOrderCustomerId').keydown(function () {
    var searchID = $('#txtOrderCustomerId').val();
    var response = searchOrderCustomer(searchID);
    if (response) {
        $('#txtOrderCustomer').val(response.name);
        $('#txtOrderCustomerAddress').val(response.address);

    }

});

function searchOrderItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            return itemDB[i];
        }
    }
}


$('#txtOrderItemCodes').keydown(function () {
    var searchID = $('#txtOrderItemCodes').val();
    var response = searchOrderItem(searchID);
    if (response) {
        $('#txtOrderItemSellName').val(response.name);
        $('#txtQuantityOnHand').val(response.qty);
        $('#txtItemSellPrice').val(response.price);

    }

});

function clearAll() {
    $('#txtOrderId,#txtOrderCustomerId,#txtOrderCustomer,#txtOrderCustomerAddress,#txtOrderItemCodes,#txtOrderItemSellName,#txtQuantityOnHand,#txtOrderQuantity,#txtItemSellPrice,#txtItemSellDiscount,#lblTotalQty,#lblTotalPrice,#lblTotalDiscount,#lblSubTotalPrice,#lblBalance,#lblCash').val("");
    $('#txtOrderId,#txtOrderCustomerId,#txtOrderCustomer,#txtOrderCustomerAddress,#txtOrderItemCodes,#txtOrderItemSellName,#txtQuantityOnHand,#txtOrderQuantity,#txtItemSellPrice,#txtItemSellDiscount,#lblTotalQty,#lblTotalPrice,#lblTotalDiscount,#lblSubTotalPrice,#lblBalance,#lblCash').css('border', '2px solid #ced4da');
    $('#txtOrderId').focus();
    // $("#buttonAddOrder").attr('disabled', true);

}

$('#lblCash').keyup(function () {
    $('#lblBalance').prop('disabled',false);
    setBalance();
    $('#lblBalance').prop('disabled',true);
});

function setBalance() {
    let total = $('#lblTotalPrice').val();
    let cash = $('#lblCash').val();

        if (total < cash) {
            $('#lblBalance').val($('#lblCash').val()-$('#lblTotalPrice').val());
        }
    $('#buttonAddOrder').prop('disable', true)
}

function disableLbl() {
    $('#lblTotalPrice').prop('disabled',true);
    $('#lblTotalDiscount').prop('disabled',true);
    $('#lblSubTotalPrice').prop('disabled',true);
    $('#lblTotalQty').prop('disabled',true);

}