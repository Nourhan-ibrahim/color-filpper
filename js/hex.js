// عرفنا الارقام الهيكسا  اللى هنختار منهم من 0 لf
var colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");
// الزرار الىل لما ندوس عليه الفانكش تشتغل
var colorName = document.getElementById("colorname");
// ال مكان اللى هنكتب فيه اسم اللون الجديد

btn.addEventListener("click", function () {
    // code عرفناه هنا عشان عاوزين فى كل مره ندوس على الزرار يحط#
    // # ويدخل اللوب 6 مرات عشان يكتب الكود صح
    var code = "#";
    for (var i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * colors.length);
        code += colors[index]
    }
    document.body.style.backgroundColor = code;
    colorName.textContent = code;//textContent بتمسح اللى هناك وتحط مكانه جديد
    
});
