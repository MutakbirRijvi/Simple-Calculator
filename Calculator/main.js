function DeleteMe()
{
    document.getElementById('result').value = "";
}

function calculator(Value)
{
    document.getElementById('result').value += Value;
}

function Answer()
{
    document.getElementById('result').value = eval(document.getElementById('result').value);

}