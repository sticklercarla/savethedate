const springButton = document.querySelector("#spring")
const artDecoButton = document.querySelector("#art-deco")
const formalButton = document.querySelector("#formal")
const invitation = document.querySelector(".invitation")

const onSpringButton = () => {
    invitation.classList.remove("art-deco-invitation")
    invitation.classList.remove("formal-invitation")
    invitation.classList.add("spring-invitation")
}
const onArtDecoButton = () => {
    invitation.classList.remove("formal-invitation")
    invitation.classList.remove("spring-invitation")
    invitation.classList.add("art-deco-invitation")
}
const onFormalButton = () => {
    invitation.classList.remove("spring-invitation")
    invitation.classList.remove("art-deco-invitation")
    invitation.classList.add("formal-invitation")
}

springButton.addEventListener('click', onSpringButton)
artDecoButton.addEventListener('click', onArtDecoButton)
formalButton.addEventListener('click', onFormalButton)



const brGrName = document.querySelector("#br-gr")
const brGrNameDiv = document.querySelector(".br-gr-name")

const onTypingBrideGroomName = () => {
    brGrNameDiv.innerHTML = brGrName.value
}

brGrName.addEventListener('keyup', onTypingBrideGroomName)

const grBrName = document.querySelector("#gr-br")
const grBrNameDiv = document.querySelector(".gr-br-name")

const onTypingGroomBrideName = () => {
    grBrNameDiv.innerHTML = grBrName.value
}

grBrName.addEventListener('keyup', onTypingGroomBrideName)

const date = document.querySelector("#date")
const dateDiv = document.querySelector(".event-date")

const onTypingDate = () => {
    dateDiv.innerHTML = date.value
}

date.addEventListener('keyup', onTypingDate)

const eventLocation = document.querySelector("#location")
const eventLocationDiv = document.querySelector(".event-location")

const onTypingEventLocation = () => {
    eventLocationDiv.innerHTML = eventLocation.value
}

eventLocation.addEventListener('keyup', onTypingEventLocation)