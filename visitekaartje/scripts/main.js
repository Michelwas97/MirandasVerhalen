const fullname = document.querySelector('.fullname')
const email = document.querySelector('.email')
const summary = document.querySelector('.summary')

window.addEventListener('DOMContentLoaded', () => {
    // fetch call to api
    fetch('https://whois.fdnd.nl/api/v1/member?id=cldex7gja490w0avwzfaio8oa')
        .then(response => response.json())
        .then(data => {
            fullname.innerHTML = data.member.name + ' ' + data.member.surname,
            summary.innerHTML = data.member.bio.html
        })
})