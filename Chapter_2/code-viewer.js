// code-viewer.js
document.addEventListener("DOMContentLoaded", function() {
    fetch(location.href)
    .then(response => response.text())
    .then(text => {
        // 코드 블록 추가
        let pre = document.createElement("pre");
        pre.textContent = text;
        document.body.appendChild(document.createElement("hr"));
        document.body.appendChild(pre);
    });
});
