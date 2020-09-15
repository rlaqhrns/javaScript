function initEvent() {
    $("#add").click(function () {
        let result = sum(add);
        $("#ans1").val(result);
    })
    $("#mul").click(function () {

        let result = sum(mul);
        $("#ans1").val(result);

    })
    $("#order").click(function () {
        let result = check();
        $("#orderAns").val(result);
    })
    $("#ranColorBtn").click(function () {
        randomColor();
    })
    $("ul.menu li").click(function(){
        $(this).addClass("selectItem");
    })
    $("#resetColor").click(function(){
        $("ul.menu li").removeClass();
    })
}
function sum(func) {
    let input1 = parseInt($("#inputBox1").val());
    let input2 = parseInt($("#inputBox2").val());
    let input3 = parseInt($("#inputBox3").val());
    let input4 = parseInt($("#inputBox4").val());
    return func(input1, input2, input3, input4);
}
function add(input1, input2, input3, input4) {
    let result = input1 + input2 + input3 + input4;
    console.log(result);
    return result;
}
function mul(input1, input2, input3, input4) {
    let result = input1 * input2 * input3 * input4;
    console.log(result);
    return result;
}
function check() {
    let $checkedBox = $(":checkbox[name='checkBox']:checked");
    let msg = "";
    $checkedBox.each(function (index, item) {
        if (msg == "") {
            msg += item.value;
        } else {
            msg += ", " + item.value;
        }

    })

    return msg;
}
function randomColor() {
    let code = "0123456789abcdef";
    let arr = code.split("");
    console.log(arr);
    $(".ranColorText").each(function (index, item) {
        let colorCode = "#";
        for (let i = 0; i < 6; i++) {
            let ranIndex = Math.floor(Math.random() * arr.length);
            colorCode += arr[ranIndex];
        }
        console.log(colorCode);
        $(this).css("color", colorCode);

    })


}