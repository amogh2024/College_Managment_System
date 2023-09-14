
//validate INSERTSTUDENT

//validation OF DROPDOWN DATE OF BIRTH
var Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];// index => month [0-11]
$(document).ready(function () {
    var option = '<option value="day">day</option>';
    var selectedDay = "day";
    for (var i = 1; i <= Days[0]; i++) { //add option days
        option += '<option value="' + i + '">' + i + '</option>';
    }
    $('#ddldd').append(option);
    $('#ddldd').val(selectedDay);
    var option = '<option value="month">month</option>';
    var selectedMon = "month";
    for (var i = 1; i <= 12; i++) {
        option += '<option value="' + i + '">' + i + '</option>';
    }
    $('#DDLMM').append(option);
    $('#DDLMM').val(selectedMon);

    //var option = '<option value="month">month</option>';
    //var selectedMon ="month";
    //for (var i=1;i <= 12;i++){
    //    option += '<option value="'+ i + '">' + i + '</option>';
    //}
    //$('#DDLMM').append(option);
    //$('#DDLMM').val(selectedMon);
    var d = new Date();
    var option = '<option value="year">year</option>';
    selectedYear = "year";
    for (var i = 1930; i <= d.getFullYear(); i++) {// years start i
        option += '<option value="' + i + '">' + i + '</option>';
    }
    $('#ddlyyyy').append(option);
    $('#ddlyyyy').val(selectedYear);


    var d = new Date();
    var option = '<option value="year">year</option>';
    selectedYear = "year";
    for (var i = 1930; i <= d.getFullYear(); i++) {// years start i
        option += '<option value="' + i + '">' + i + '</option>';
    }
    $('#ddlyyyycom').append(option);
    $('#ddlyyyycom').val(selectedYear);




});
function isLeapYear(ddlyyyy) {
    year = parseInt(ddlyyyy);
    if (year % 4 != 0) {
        return false;
    } else if (ddlyyyy % 400 == 0) {
        return true;
    } else if (ddlyyyy % 100 == 0) {
        return false;
    } else {
        return true;
    }
}

function change_year(select) {
    if (isLeapYear($(select).val())) {
        Days[1] = 29;
    }
    else {
        Days[1] = 28;
    }
    if ($("#DDLMM").val() == 2) {
        var day = $('#ddldd');
        var val = $(day).val();
        $(day).empty();
        var option = '<option value="day">day</option>';
        for (var i = 1; i <= Days[1]; i++) { //add option days
            option += '<option value="' + i + '">' + i + '</option>';
        }
        $(day).append(option);
        if (val > Days[month]) {
            val = 1;
        }
        $(day).val(val);
    }
}
function change_month(select) {
    var day = $('#ddldd');
    var val = $(day).val();
    $(day).empty();
    var option = '<option value="day">day</option>';
    var month = parseInt($(select).val()) - 1;
    for (var i = 1; i <= Days[month]; i++) { //add option days
        option += '<option value="' + i + '">' + i + '</option>';
    }
    $(day).append(option);
    if (val > Days[month]) {
        val = 1;
    }
    $(day).val(val);
}

//END DROPDOWN DATE OF BIRTH


//Email Validation
function checkmail(ctrl) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test($(ctrl).val())) {
        $(ctrl).focus();
        //alertify.alert(msg);
        alert('ENTER VALID EMAIL ID')
        return false;
    } else {
        return true;
    }
}
$('#btnSubmit').click(function () {
    var parameters = new URLSearchParams(window.location.search);
    var regno = parameters.get("regno");
    file_Upload("StudentPhoto", "hidden_Photo_Path", GetUniqueFileName() + ".jpg", "~/Edu/Images/");
    file_Upload("imgdocumentation", "hidden_Document_Path", GetUniqueFileName() + ".jpg", "~/Edu/Images/");
    if ($("#hidden_Photo_Path").val() == "") { $("#StudentPhoto").focus(); alert("Please upload Photo!"); return false; }
    //if ($("#hidden_Document_Path").val() == "") { $("#imgdocumentation").focus(); alert("Please Upload passport or birth documentation!"); return false; }


    var stdName = $("#txt_StudentName").val();
    if (stdName.trim() == "" || stdName == undefined || stdName == null) {
        alert("Please enter student name!");
        $("#txt_StudentName").focus();
        return false;
    }
    var deg = $("#Degreelevel").val();
    if (deg.trim() == "0" || deg == undefined || deg == null) {
        alert("Please Select Degree level!!!");
        $("#Degreelevel").focus();
        return false;
    }
    var photo = $("#StudentPhoto").val();
    if (photo.trim() == "" || photo == undefined || photo == null) {
        alert("Please Upload Student Photo!!!");
        $("#StudentPhoto").focus();
        return false;
    }
    //var documentation = $("#imgdocumentation").val();
    //if (documentation.trim() == "" || documentation == undefined || documentation == null) {
    //    alert("Please Upload passport or birth documentation!!!");
    //    $("#imgdocumentation").focus(); return false;
    //}
    var father = $("#txtFatherName").val();
    if (father.trim() == "" || father == undefined || father == null) {
        alert("Please enter Father name!!!");
        $("#txtFatherName").focus(); return false;
    }
    var mother = $("#txtMotherName").val();
    if (mother.trim() == "" || mother == undefined || mother == null) {
        alert("Please enter mother name!!!");
        $("#txtMotherName").focus(); return false;
    }
    var mobile = $("#txtMobileNo").val();
    if (mobile == "" || mobile == undefined || mobile == null) {
        alert("Please Fill Mobile No !");
        $("#txtMobileNo").focus();
        return false;
    }
    if (mobile.length == 10) {

    }
    else {
        alert("Please enter 10 digit mobile number!");
        $("#txtMobileNo").focus();
        return false;
    }
    var ddlyy = $("#ddlyyyy").val();
    if (ddlyy == "year" || ddlyy == undefined || ddlyy == null) {
        alert("Please Select Year!");
        $("#ddlyyyy").focus();
        return false;
    }

    var ddlMM = $("#DDLMM").val();
    if (ddlMM == "month" || ddlMM == undefined || ddlMM == null) {
        alert("Please Select Month!");
        $("#DDLMM").focus();
        return false;
    }
    var ddldate = $("#ddldd").val();
    if (ddldate == "day" || ddldate == undefined || ddldate == null) {
        alert("Please Select Date!");
        $("#ddldd").focus();
        return false;
    }
    var adr = $("#Presentaddress").val();
    if (adr.trim() == " " || adr == undefined || adr == null) {
        alert("Please Enter Present address!!!");
        $("#Presentaddress").focus(); return false;
    }
    var nation = $("#national").val();
    if (nation.trim() == "" || nation == undefined || nation == null) {
        alert("Please Enter national!!!");
        $("#national").focus(); return false;
    }
    var type = $("#Studenttype").val();
    if (type.trim() == "0" || type == undefined || type == null) {
        alert("Please Select Student type!!!");
        $("#Studenttype").focus(); return false;
    }
    var scname = $("#Schoolname").val();
    if (type.trim() == "" || type == undefined || type == null) {
        alert("Please Enter School name!!!");
        $("#Schoolname").focus(); return false;
    }
    var ddlyy = $("#ddlyyyycom").val();
    if (ddlyy == "year" || ddlyy == undefined || ddlyy == null) {
        alert("Please Select Year of completion!!!");
        $("#ddlyyyycom").focus();
        return false;
    }
    var qual = $("#qualification").val();
    if (qual == " " || qual == undefined || qual == null) {
        alert("Please Enter qualification!!!");
        $("#qualification").focus(); return false;
    }
    var status = $("#Currentstatus").val();
    if (status == "" || status == undefined || status == null) {
        alert("Please Select Current status!!!");
        $("#Currentstatus").focus(); return false;
    }
    var location = $("#stdlocation").val();
    if (location == "" || location == undefined || location == null) {
        alert("Please Select area of study!!!");
        $("#stdlocation").focus(); return false;
    }
    var email = $("#txtEmail").val();
    if (email == "" || email == undefined || email == null) {
        alert("Please Enter Valid Email Id!!!");
        $("#txtEmail").val = "";
        $("#txtEmail").focus(); return;
    }
    var dataobject = {
        Student_Name: $("#txt_StudentName").val(),
        Father_Name: $("#txtFatherName").val(),
        Mother_Name: $("#txtMotherName").val(),
        MobileNo: $("#txtMobileNo").val(),
        EmailId: $("#txtEmail").val(),
        Address: $("#Presentaddress").val(),
        Photo: $("#hidden_Photo_Path").val(),
        Cartificate: $("#hidden_Document_Path").val(),
        Degree_Level: $("#Degreelevel").val(),
        NationalId: $("#national").val(),
        Student_type: $("#Studenttype").val(),
        College_Name: $("#Schoolname").val(),
        YEAR: $("#ddlyyyycom").val(),
        Highest_Qual: $("#qualification").val(),
        Current_Status: $("#Currentstatus").val(),
        Study_Location: $("#stdlocation").val(),
        DOB: $("#ddldd").val() + "-" + $("#DDLMM").val() + "-" + $("#ddlyyyy").val(),
        Action: "Insert_Stu_Registration",
    };
    $.ajax({
        url: "/HomeController/InsertStudent",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            alert("Education Details Saved Successfully.");
            $("#btnSubmit").prop("disabled", true);
            alert("Data Saved Successfuly");
            window.location = 'Success';


        },
        //error: function (XMLHttpRequest, textStatus, errorThrown) {
        //    alert('Please Check values Entered by you !!!');
        //}
    });
});

function readPhoto(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {

        if (input.files[0].size > 2097152) {
            $("#StudentPhoto").val('');
            alert("Image size must be lesser than 2MB!");
            return false;
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            $('#photo_preview').show();
            reader.onload = function (e) {
                $('#photo_preview')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        $("#StudentPhoto").val('');
        alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;

    }
}

function readSign(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {

        if (input.files[0].size > 2097152) {
            $("#imgdocumentation").val('');
            alert("Image size must be lesser than 2MB!");
            return false;

        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            $('#sign_preview').show();
            reader.onload = function (e) {
                $('#sign_preview')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    else {
        $("#imgdocumentation").val('');
        alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;

    }
}

function GetUniqueFileName() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function file_Upload(File_ID, hf_name, File_Name, File_Server_Path) {
    if ($('#' + File_ID + '').length != 0) {
        var File = $('#' + File_ID + '')[0].files;
        if (File.length > 0) {
            $('#' + hf_name + '').val(File_Server_Path + File_Name);
            //Declaring new Form Data Instance  


            var formData = new FormData();
            formData.append("File", File[0]);
            formData.append("File_Name", File_Name);
            formData.append("File_Server_Path", File_Server_Path);

            $.ajax({
                type: "POST",
                url: "/FileUpload_Handler.ashx",
                data: formData,
                async: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                },
                success: function (response) {
                },
                complete: function () {

                }
            });
        }
    }
}









