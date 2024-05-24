

let password = "";
let tag = document.querySelector(".imput");
function generatePassword() {
    for (let i=0; i<8; i++) {
        let x = Math.floor(Math.random()*100+23);
        let ch = String.fromCharCode(x);
        password += ch;
    }
    tag.innerHTML = password;

    setTimeout(() => {
        location.reload();
    },9000)

}