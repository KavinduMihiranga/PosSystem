$("#txtCustomerId").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCustomerName").focus();

    }
});
$("#txtCustomerName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCustomerAddress").focus();

    }
});
$("#txtCustomerAddress").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCustomerTP").focus();

    }
});
$("#txtCustomerTP").keydown(function (event) {
    if (event.key == "Enter") {

        saveCustomer();
    }

});

//CRUD Operation
$("#btnAddCustomer").click(function () {
    saveCustomer();
});

function loadAllCustomers() {
    $('#custTable').empty();
    for (var i of customerDB) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.tp}</td></tr>`;
        $("#custTable").append(row);
    }
}

function saveCustomer() {
    $("#custTable>tr").off("click");
    let custId = $("#txtCustomerId").val();
    let custName = $("#txtCustomerName").val();
    let custAddress = $("#txtCustomerAddress").val();
    let custTP = $("#txtCustomerTP").val();

    if (confirm("Do You Want To Add This Customer..? ")) {

        alert("Add Customer Successfully.!");

    } else {
        alert("Cancel Customer Add !");
    }

    var customerObject = {
        id: custId,
        name: custName,
        address: custAddress,
        tp: custTP
    };

    // var customerId={
    //     cId:custId
    // }
    //
    // customerIdDB.push(customerId.cId);

    customerDB.push(customerObject);

    $('#custTable').empty();
    for (var i of customerDB) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.tp}</td></tr>`;
        $("#custTable").append(row);
        clearAllCustomer();

    }


    $("#custTable>tr").click(function () {
        let cusID = $(this).children(":eq(0)").text();
        let cusName = $(this).children(":eq(1)").text();
        let cusAddress = $(this).children(":eq(2)").text();
        let cusTP = $(this).children(":eq(3)").text();

        $("#txtCustomerId").val(cusID);
        $("#txtCustomerName").val(cusName);
        $("#txtCustomerAddress").val(cusAddress);
        $("#txtCustomerTP").val(cusTP);

    });

}

function clearAllCustomer() {
    $('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerTP').val("");
    $('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerTP').css('border', '2px solid #ced4da');
    $('#txtCustomerId').focus();
    $("#btnAddCustomer").attr('disabled', true);
    loadAllCustomers();
    $("#errorId,#errorName,#errorAddress,#errorTp").text(" ");
}

$("#btnUpdateCustomer").click(function () {
    updateCustomer();
});

function updateCustomer() {
    var searchCustomer=$('#txtCustomerId').val();
    var response=searchCustomer(searchCustomer);
    if (response){

    }
    for (var i of customerDB) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.tp}</td></tr>`;
        $("#custTable").append(row);
        clearAllCustomer();
    }

    var newCusId = $("#txtCustomerId").val();
    var newCusName = $("#txtCustomerName").val();
    var newCusAddress = $("#txtCustomerAddress").val();
    var newCusTp = $("#txtCustomerTP").val();

    $("td:eq(0)").text(newCusId);
    $("td:eq(1)").text(newCusName);
    $("td:eq(2)").text(newCusAddress);
    $("td:eq(3)").text(newCusTp);

    if (confirm("Do You Want To Update This Customer..? ")) {

        alert("Update Customer Successfully.!");

    } else {
        alert("Cancel Customer Update !");
    }
}

$('#btnSearch').click(function () {
    var searchID = $('#txtCustomerSearchId').val();
    var response = searchCustomer(searchID);
    if (response) {
        $('#txtCustomerId').val(response.id);
        $('#txtCustomerName').val(response.name);
        $('#txtCustomerAddress').val(response.address);
        $('#txtCustomerTP').val(response.tp);

    } else {
        alert('No such a Customer');
    }


})

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            return customerDB[i];
        }
    }
}

$("#btnDeleteCustomer").click(function () {
    deleteCustomer();
});

function deleteCustomer() {
    let custId = $(this).children(":eq(0)").text("");
    let custName = $(this).children(":eq(1)").text("");
    let custAddress = $(this).children(":eq(2)").text("");
    let custTp = $(this).children(":eq(3)").text("");

    var searchId=$('#txtCustomerId').val();
    var res=searchCustomer(searchId);
    if (res){
        $('#custTable').empty();
        for (var i of customerDB) {
            let row = `<tr><td>${custId}</td><td>${custName}</td><td>${custAddress}</td><td>${custTp}</td></tr>`;
            $("#custTable>tr").empty(row);

        }
    }

    if (confirm("Do You Want To Delete This Customer..? ")) {

        alert("Delete Customer Successfully.!");

    } else {
        alert("Delete Customer Update !");
    }


}

//Validations

var regExCusID = /^(C00-)[0-9]{3,4}$/;

$("#txtCustomerId").keyup(function () {
    let input = $("#txtCustomerId").val();
    if (regExCusID.test(input)) {
        $("#txtCustomerId").css('border', '2px solid green');
        $("#errorId").text("");
        $("#btnAddCustomer").prop("disabled", false);
    } else {
        $("#txtCustomerId").css('border', '2px solid red');
        $("#errorId").text("Wrong format : C00-001");
        $("#btnAddCustomer").prop("disabled", true);

    }
});

var regExCusName = /^[a-zA-Z ]+$/;

$("#txtCustomerName").keyup(function () {
    let input = $("#txtCustomerName").val();
    if (regExCusName.test(input)) {
        $("#txtCustomerName").css('border', '2px solid green');
        $("#errorName").text("");
        $("#btnAddCustomer").prop("disabled", false);

    } else {
        $("#txtCustomerName").css('border', '2px solid red');
        $("#errorName").text("Wrong format : Type Your Name");
        $("#btnAddCustomer").prop("disabled", true);

    }
});

var regExCusAddress = /^[A-Za-z0-9'\.\-\s\,]+$/;

$("#txtCustomerAddress").keyup(function () {
    let input = $("#txtCustomerAddress").val();
    if (regExCusAddress.test(input)) {
        $("#txtCustomerAddress").css('border', '2px solid green');
        $("#errorAddress").text("");
        $("#btnAddCustomer").prop("disabled", false);

    } else {
        $("#txtCustomerAddress").css('border', '2px solid red');
        $("#errorAddress").text("Wrong format : Type Your Address");
        $("#btnAddCustomer").prop("disabled", true);

    }
});

var regExCusPhoneNo = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

$("#txtCustomerTP").keyup(function () {
    let input = $("#txtCustomerTP").val();
    if (regExCusPhoneNo.test(input)) {
        $("#txtCustomerTP").css('border', '2px solid green');
        $("#errorTp").text("");
        $("#btnAddCustomer").prop("disabled", false);

    } else {
        $("#txtCustomerTP").css('border', '2px solid red');
        $("#errorTp").text("Wrong format : Type Your Phone No");
        $("#btnAddCustomer").prop("disabled", true);

    }
});

$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerTP').on('keydown', function (eventObj) {
    if (eventObj.key == "Tab") {
        eventObj.preventDefault();
    }
});