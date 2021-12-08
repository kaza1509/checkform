let button = document.getElementById('button')

let inName = document.getElementById('inName')
let inEmail = document.getElementById('inEmail')
let inPhone = document.getElementById('inPhone')
let inCompany = document.getElementById('inCompany')
let inTextarea = document.getElementById('inTextarea')

let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let company = document.getElementById('company')
let textarea = document.getElementById('message')

let borderSucess = '2px solid green'
let borderFail =  '2px solid red'
let success = []

button.addEventListener('click', () => {

    //======== check phần input name ==========
    if(name.value == '') {
        inName.style.display = 'block'
        name.style.border = borderFail
    }
    else {
        let pattern = /^[a-zA-Z ]+$/gi
        //đúng 
        if(pattern.test(name.value)) {
            //không vượt quá 32 kí tự
            if(name.value.length < 6 || name.value.length > 32) {
                name.style.border = borderFail
                inName.innerHTML = 'Name must have 6 to 32 character'
                inName.style.display = 'block'
            }
            else {
                name.style.border = borderSucess
                inName.style.display = 'none'
                success.push(0)
            }
        }
        //sai
        else {
            name.style.border = borderFail
            inName.innerHTML = 'Wrong format'
            inName.style.display = 'block'
        }
    }

    //======== check phần input email ==========

    if(email.value == '') {
        inEmail.style.display = 'block'
        email.style.border = borderFail
    }
    else {
        let pattern = /^[a-z]{1}[a-zA-Z0-9]+@([a-z]+.)+$/gi
        if(pattern.test(email.value)) {
            //không vượt quá 32 kí tự
            if(email.value.length > 32) {
                email.style.border = borderFail
                inEmail.innerHTML = 'Email not over 32 character'
                inEmail.style.display = 'block'
            }
            else {
                email.style.border = borderSucess
                inEmail.style.display = 'none'
                success.push(0)
            }
        }
        else {
            email.style.border = borderFail
            inEmail.innerHTML = 'Wrong format'
            inEmail.style.display = 'block'
        }
        
    }

    //======== check phần input phone ==========

    if(phone.value == '') {
        inPhone.style.display = 'block'
        phone.style.border = borderFail
    }
    else {
        let pattern = /^0[0-9]{8,9}/gi
        if(pattern.test(phone.value)) {
            phone.style.border = borderSucess
            inPhone.style.display = 'none'
            success.push(0)
        }
        else {
            phone.style.border = borderFail
            inPhone.innerHTML = 'Phone has 9 or 10 number'
            inPhone.style.display = 'block'
        }
    }

    //======== check phần input company ==========

    if(company.value == '') {
        inCompany.style.display = 'block'
        company.style.border = borderFail
    }
    else {
        let pattern = /company(_[a-zA-Z0-9]+)+$/gi
        if(pattern.test(company.value)) {
            company.style.border = borderSucess
            inCompany.style.display = 'none'
            success.push(0)
        }
        else {
            company.style.border = borderFail
            inCompany.innerHTML = 'Wrong format. It must be COMPANY_XXX'
            inCompany.style.display = 'block'
        }
    }

    //======== check phần input message ==========
    if(textarea.value == '') {
        inTextarea.style.display = 'block'
        textarea.style.border =  borderFail
    }
    else {
        inTextarea.style.display = 'none'
        textarea.style.border =  borderSucess
        success.push(0)
    }
    if(success.length == 5) {
        let noti = document.getElementById('noti')
        noti.style.display = 'block'
        //--------------------------------------
        window.location
    }
})

button.addEventListener('click', (e) => {
    e.preventDefault()
})