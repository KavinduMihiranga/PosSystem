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
function saveCustomer() {
    $("#btnAddCustomer").click(function () {

        $("#custTable>tr").off("click");

        let custId = $("#txtCustomerId").val();
        let custName = $("#txtCustomerName").val();
        let custAddress = $("#txtCustomerAddress").val();
        let custTP = $("#txtCustomerTP").val();

        var customerObject = {
            id: custId,
            name: custName,
            address: custAddress,
            tp: custTP
        };
        customerDB.push(customerObject);
        $('#custTable').empty();
        for (var i of customerDB) {
            let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.tp}</td></tr>`;
            $("#custTable").append(row);

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


    });
}

$("#btnUpdateCustomer").click(function () {
    updateCustomer();
});

function updateCustomer() {
    $("#btnUpdateCustomer").click(function () {

        var newCusId = $("#txtCustomerId").val();
        var newCusName = $("#txtCustomerName").val();
        var newCusAddress = $("#txtCustomerAddress").val();
        var newCusTp = $("#txtCustomerTP").val();


        if (confirm("Do You Want To Update This Customer..? ")) {


            $("td:eq(0)").text(newCusId);
            $("td:eq(1)").text(newCusName);
            $("td:eq(2)").text(newCusAddress);
            $("td:eq(3)").text(newCusTp);


            alert("Update Customer Successfully.!");

        } else {
            alert("Cancel Customer Update !");
        }


    });
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
    $('#btnDeleteCustomer').click(function () {
        let custId = $('#txtCustomerId').val();
        let deleteCustomer = searchCustomer(custId);
        if (deleteCustomer) {
            let deleteId = $('#txtCustomerId').val(deleteCustomer.id);
            let deleteName = $('#txtCustomerName').val(deleteCustomer.name);
            let deleteAddress = $('#txtCustomerAddress').val(deleteCustomer.address);
            let deleteTp = $('#txtCustomerTP').val(deleteCustomer.tp);

            let deletedId = customerDB.find(deleteCustomer.id);
            let deletedName = customerDB.find(deleteCustomer.name);
            let deletedAddress = customerDB.find(deleteCustomer.address);
            let deletedTp = customerDB.find(deleteCustomer.tp);

            customerDB.remove(deletedId);
            customerDB.remove(deletedName);
            customerDB.remove(deletedAddress);
            customerDB.remove(deletedTp);

        } else {
            alert('No Such a Customer')
        }

    })
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