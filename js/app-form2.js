
//----------------------------------------------

//----------------------------------------------

let selectHeader = document.querySelectorAll('.select-header');
let selectItem = document.querySelectorAll('.select-item');

selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
});

selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
});

function selectToggle() {
    this.parentElement.classList.toggle('is-active');
}

function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.select-city');
    let currentText = select.querySelector('.select-current');
    currentText.innerText = text;
    select.classList.remove('is-active');
}

//------------------------------

function allowNumbersOnly(e) {
	var code = (e.which) ? e.which : e.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {
			e.preventDefault();
	}
}


let inputsNumber = document.querySelectorAll('.number');

inputsNumber.forEach(item => {

    item.addEventListener('keypress', (e) => {
        allowNumbersOnly(e);
    });
    
})

//----------------------

let methodDelivery = document.querySelectorAll('.methoddelivery')
let subcontent = document.querySelectorAll('.subcontent')

methodDelivery.forEach(item => {
    item.addEventListener('click', (e) => {
        let currentCheckbox = e.target
        
        let thisDataSubcontent = currentCheckbox.dataset.subcontent
        let subcontentArray = document.getElementsByClassName(thisDataSubcontent)


        subcontent.forEach(elem => {
            elem.classList.remove('_active');
        })

        for (let key of subcontentArray) {
            key.classList.add('_active')
        }

    })

})

//--------------------------------------

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//---------------------------

let ButtonSubmit = document.querySelector('.purchase');
let inputsNameItems = document.querySelectorAll('.inputs-name input.required');
let inputEmail = document.querySelector('.input-email');

let checkboxesMethodDelivery = document.querySelectorAll('.methoddelivery');

// check methoddelivery checkbox

document.querySelectorAll('.methoddelivery').forEach( item => {
    item.addEventListener('click', ()=>{
        document.querySelectorAll('.methoddelivery').forEach(i=>{
            i.closest('.checkboxes-methoddelivery-container').classList.remove('_error')
        })
    })
})


ButtonSubmit.addEventListener('click', (e) => {

    //check inputs
    for (let i = 0; i < inputsNameItems.length; i++) {
        inputsNameItems[i].classList.remove('_error');

        if (!inputsNameItems[i].value) {
            inputsNameItems[i].classList.add('_error');
        }

    }
    if (emailTest(inputEmail)) {
        inputEmail.classList.add('_error');
    }

    let checkCheckboxes = [...checkboxesMethodDelivery].some((element) => {
        if (element.checked) {
            return true;
        } else {
            return false;
        }
    })

    if (!checkCheckboxes) {
        [...checkboxesMethodDelivery].forEach(item => {
            item.closest('.checkboxes-methoddelivery1').classList.add('_error')
        })
    } else {
        document.querySelector('.checkboxes-methoddelivery1').classList.remove('_error')
    }

    let selectCityContainer = document.querySelector('.select-city-container')

    if (selectCityContainer.querySelector('.select-current').innerHTML == 'Выбрать город') {
        selectCityContainer.classList.add('_error')
    } else {
        selectCityContainer.classList.remove('_error')
    }
    checkedDeliveryPostOffice()
    checkDeliveryHome ()
})

let mailDelivery = document.querySelector('.mailDelivery')
let homeDelivery = document.querySelector('.homeDelivery')

let selectPostOfficeContainer = document.querySelector('.select-post-office')
let checkboxesMethodPayMail = document.querySelectorAll('.methodPayPost');
let checkboxesMethodpay1 = document.querySelector('.checkboxes-methodpay1')

function checkedDeliveryPostOffice() {

    if (mailDelivery.checked) {


        if (selectPostOfficeContainer.querySelector('.select-current').innerHTML == 'Выбрать отдел почты') {
            selectPostOfficeContainer.classList.add('_error')
        } else {
            selectPostOfficeContainer.classList.remove('_error')
        }

        let checkCheckboxes2 = [...checkboxesMethodPayMail].some((element) => {
            if (element.checked) {
                return true;
            } else {
                return false;
            }
        })

        if (!checkCheckboxes2) {
            [...checkboxesMethodPayMail].forEach(item => {
                item.closest('.checkboxes-methodpay1').classList.add('_error')
            })
        } else {
            checkboxesMethodpay1.classList.remove('_error')
        }
    } else {
        selectPostOfficeContainer.classList.remove('_error')
        checkboxesMethodpay1.classList.remove('_error')
    }
}

let inputsAdress = document.querySelectorAll('.inputs-adress input.required');
let checkboxesMethodPayHome = document.querySelectorAll('.methodPayHome');
let checkboxesMethodpay2 = document.querySelector('.checkboxes-methodpay2')

function checkDeliveryHome () {

    if (homeDelivery.checked) {
        
        for (let i = 0; i < inputsAdress.length; i++) {
            inputsAdress[i].classList.remove('_error');

            if (!inputsAdress[i].value) {
                inputsAdress[i].classList.add('_error');
            }

        }

        let checkCheckboxes3 = [...checkboxesMethodPayHome].some((element) => {
            if (element.checked) {
                return true;
            } else {
                return false;
            }
        })

        if (!checkCheckboxes3) {
            [...checkboxesMethodPayHome].forEach(item => {
                item.closest('.checkboxes-methodpay2').classList.add('_error')
            })
        } else {
            checkboxesMethodpay2.classList.remove('_error')
        }
    } else {
        inputsAdress.forEach( item => {
            item.classList.remove('_error');
            checkboxesMethodpay2.classList.remove('_error')
        })
    }
}

