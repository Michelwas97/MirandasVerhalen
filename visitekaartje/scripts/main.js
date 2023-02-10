window.addEventListener('DOMContentLoaded', () => {
    // fetch call to api
    fetch('https://whois.fdnd.nl/api/v1/member?id=cldex7gja490w0avwzfaio8oa')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})