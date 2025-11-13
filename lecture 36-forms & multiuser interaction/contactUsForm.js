const form = document.querySelector(".contact-us");

const user = []
form.addEventListener("submit", (e) => {
    e.preventDefault()

    //acces input
    const fullName = document.querySelector("#name")
    const number = document.querySelector("#mobile")
    const gender = document.querySelector('input[name="gender"]:checked')
    const consent = document.getElementById("consent").checked ? "agree" : "disagree";
    const city = document.getElementById("city").value;
    //create empty object
    const obj = {}

    //add value to object
    obj.name = fullName.value
    obj.contact = number.value
    obj.gender = gender.value
    obj.consentTerm = consent
    obj.cityName = city

    // if (
    //     !obj.name ||
    //     !obj.contact ||
    //     !obj.gender ||
    //     !obj.consentTerm ||
    //     !obj.cityName

    // )alert("this field is mandatory")

        //reset form
    form.reset()
    //push object into array
    user.push(obj)

    //log the user array
    console.log(user)
})