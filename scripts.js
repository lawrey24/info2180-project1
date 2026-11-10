/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('input[type="email"]');
    const messageDiv= document.querySelector('.message');

    if(form){
        form.addEventListener('submit',function(event){
            event.preventDefault();

            const email = emailInput.value.trim();

            if(email!=""){
                messageDiv.textContent=`Thank you! Your email address ${email} has been added to our mailing list!`
            }else{
                messageDiv.textContent = "Please enter a valid email address";

            }

        });

        emailInput.addEventListener('input',function(){
            messageDiv.textContent = "";
        });
    }
});
        




