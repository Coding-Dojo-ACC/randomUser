$(document).ready(function() {
    $('.randomUser').click(function(){
        console.log('Inside the click')
        $.get("https://randomuser.me/api/?results=5", function(res) {
            console.log(res.results)
            for(var i = 0; i < res.results.length; i++) {
                $('.users').html(`
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                <tr>
                    <td>${res.results[i].name.first} ${res.results[0].name.last}</td>
                    <td>${res.results[i].dob.age}</td>
                    <td>${res.results[i].email}</td>
                    <td>${res.results[i].location.street.number} ${res.results[i].location.street.name}, ${res.results[i].location.city}, ${res.results[i].location.state} ${res.results[i].location.country} ${res.results[i].location.postcode} </td>
                </tr>`)
            }
        })
    })
})