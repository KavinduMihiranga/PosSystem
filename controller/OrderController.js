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
    saveOrderItem()
})

function saveOrderItem() {

    $('#orderTable>tr').off("click");

    let orderItemCodes = $('#txtOrderItemCodes').val();
    let orderItemSellName = $('#txtOrderItemSellName').val();
    let orderQuantity = $('#txtOrderQuantity').val();
    let orderQuantityOnHand = $('#txtQuantityOnHand').val();
    let orderItemSellPrice = $('#txtItemSellPrice').val();
    let orderItemSellDiscount = $('#txtItemSellDiscount').val();


    // $('#orderTable').empty();

    let row = `<tr><td>${orderItemCodes}</td><td>${orderItemSellName}</td><td>${orderQuantity}</td><td>${orderQuantityOnHand}</td><td>${orderItemSellPrice}</td><td>${orderItemSellDiscount}</td></tr>`;
    $("#orderTable").append(row);


}


$('#buttonAddOrder').click(function () {
    saveOrder();
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

    $('#lblSubTotalPrice').val(orderItemSellPrice);
    $('#tblTotalQty').val(orderQuantity);

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