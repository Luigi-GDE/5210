function Convert()
{
    var userKg = parseFloat((document.getElementById('userKg')).value);//get input
    var out = document.getElementById('out');//get output element

    if(isNaN(userKg) || userKg < 0)//input checking
    {
        out.innerHTML = `Please enter a valid number that is not less than 0`
        return;
    }

    let result = userKg * 2.205//Calculation

    out.innerHTML = `${userKg} kg would equal: ${result.toFixed(2)} lb`//Output
}