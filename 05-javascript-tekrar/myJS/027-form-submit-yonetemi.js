//form submit
//1-formu seç
//2-input bilgisini ul içerisine ekle
//3-form içerisindeki bilgiyi sıfırla
//4-eğer forma bilgi girilmezse kullanıcıyı uyar

let userFormDOM = document.querySelector("#userForm");

userFormDOM.addEventListener("submit", formHandler)

let alertDOM = document.querySelector("#alert")

const alertFunction = (title,message,className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
`

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)//Gönderdikten sonra sıfırladık
        USER_NAME.value = ""
        SCORE = ""

    } else {
        console.log("Hatalı giriş...")
        alertDOM.innerHTML=alertFunction("Başlık Bilgisi","Eksik Bilgi Girdiniz!!!","success")//success,warning,danger
    }

}

let userListDOM = document.querySelector("#userList")

const addItem = (userName, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName} <span class="badge badge-primary badge-pill">${score}</span>`
    liDOM.classList.add('list-gro,up-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)

}