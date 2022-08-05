<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="title"><h1>Case Converter</h1></div>
    <textarea name="text"></textarea>
    <button id="upper-case">Upper</button>
    <button id="lower-case">Lower</button>
    <button id="proper-case">Proper</button>
    <button id="sentence-case">Sentence</button>
    <script>
        let text = document.querySelector("textarea");
        let upperCase = document.getElementById("upper-case");
        let lowerCase = document.getElementById("lower-case");
        let properCase = document.getElementById("proper-case");
        let sentenceCase = document.getElementById("sentence-case");
        let newText = "";
        upperCase.addEventListener("click",function(){
            text.value = text.value.toUpperCase();
        });
        lowerCase.addEventListener("click",function(){
            text.value = text.value.toLowerCase();
        });
        properCase.addEventListener("click",function(){
            newText = text.value.split(" ");
            for (let x = 0; x < newText.length; x++) {
                newText[x] = newText[x][0].toUpperCase() + newText[x].slice(1);
            }
            text.value = newText.join(" ");
        });
        sentenceCase.addEventListener("click",function(){
            newText = text.value.toLowerCase().split(". ");
            for (let x = 0; x < newText.length; x++) {
                newText[x] = newText[x][0].toUpperCase() + newText[x].slice(1);
            }
            text.value = newText.join(". ");
        });
    </script>
</body>
</html>
