let inputText = document.getElementById('inputText');

let productNames = document.querySelectorAll('h2');

inputText.addEventListener('keyup', search);


function search(){
    let text = inputText.value.toLowerCase();
    
    productNames.forEach(
        function(value){
            if (value.innerHTML.toLowerCase().indexOf(text) != -1){
                value.parentElement.parentElement.style.display = '';
            }
            else{
                value.parentElement.parentElement.style.display = 'none';
            }
        }
    )
}