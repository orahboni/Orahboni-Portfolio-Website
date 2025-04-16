
let url = document.getElementById("url").url;
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = (e) => {
    const username = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userMessage = document.getElementById("message").value;
    const name = username.charAt(0).toUpperCase() + username.slice(1);

    let inputName = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let inputMessage = document.getElementById("message");



    if (username == "" || userEmail == "" || !userEmail.includes("@") || userMessage == "") {
        event.preventDefault();

        if (username == "" && userEmail == "" && userMessage == "") {

            inputName.placeholder = "Enter your name...";
            inputEmail.placeholder = "Enter your email...";
            inputMessage.placeholder = "Enter your message...";

            inputName.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputMessage.style.border = "1px solid hsl(0, 100.00%, 51.00%)";

        } else if (!username == "" && userEmail == "" && userMessage == "") {

            inputEmail.placeholder = "Enter your email...";
            inputMessage.placeholder = "Enter your message...";
            inputName.style.border = "1px solid rgb(53, 71, 107)";
            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputMessage.style.border = "1px solid hsl(0, 100.00%, 51.00%)";

        } else if (!username == "" && !userEmail.includes("@") && userMessage == "") {

            inputEmail.value = "";
            inputEmail.placeholder = "Enter a valid email...";
            inputMessage.placeholder = "Enter your message...";

            inputName.style.border = "1px solid rgb(53, 71, 107)";
            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputMessage.style.border = "1px solid hsl(0, 100.00%, 51.00%)";

        } else if (!username == "" && userEmail.includes("@") && userMessage == "") {

            inputMessage.placeholder = "Enter your message...";

            inputName.style.border = "1px solid rgb(53, 71, 107)";
            inputEmail.style.border = "1px solid rgb(53, 71, 107)";
            inputMessage.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
        
        } else if (!username == "" && !userEmail.includes("@") && !userMessage == "") {

            inputEmail.value = "";
            inputEmail.placeholder = "Enter a valid email...";
            inputName.style.border = "1px solid rgb(53, 71, 107)";
            inputMessage.style.border = "1px solid rgb(53, 71, 107)";
            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
        }
        
        else if (username == "" && (!userEmail == "" && !userEmail.includes("@") ) && userMessage == "") {

            inputEmail.value = "";
            inputEmail.placeholder = "Enter a valid email...";
            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputName.placeholder = "Enter your name...";
            inputName.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputMessage.placeholder = "Enter your message...";
            inputMessage.style.border = "1px solid hsl(0, 100.00%, 51.00%)";

        } else if (username == "" && userEmail.includes("@") && userMessage == "") {

            inputEmail.style.border = "1px solid rgb(53, 71, 107)";
            inputName.placeholder = "Enter your name...";
            inputName.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputMessage.placeholder = "Enter your message...";
            inputMessage.style.border = "1px solid hsl(0, 100.00%, 51.00%)";

        } else if (username == "" && userEmail == "" && !userMessage == "") {

            
            inputName.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputName.placeholder = "Enter your name...";
            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputEmail.placeholder = "Enter your email...";
            inputMessage.style.border = "1px solid rgb(53, 71, 107)";

        } else if (username == "" && (!userEmail == "" && !userEmail.includes("@")) && !userMessage == "") {

            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputEmail.value = "";
            inputEmail.placeholder = "Enter a valid email...";
            inputName.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputName.placeholder = "Enter your name...";
            inputMessage.style.border = "1px solid rgb(53, 71, 107)";

        } else if (username == "" && userEmail.includes("@") && !userMessage == "") {

            inputEmail.style.border = "1px solid rgb(53, 71, 107)";
            inputName.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputName.placeholder = "Enter your name...";
            inputMessage.style.border = "1px solid rgb(53, 71, 107)";

        } else if (!username == "" && userEmail == "" && !userMessage == "") {

            inputEmail.style.border = "1px solid hsl(0, 100.00%, 51.00%)";
            inputName.style.border = "1px solid rgb(53, 71, 107)";
            inputEmail.placeholder = "Enter your email...";
            inputMessage.style.border = "1px solid rgb(53, 71, 107)";

        } 
        
    } else {

        inputName.style.border = "1px solid rgb(53, 71, 107)";
        inputMessage.style.border = "1px solid rgb(53, 71, 107)";
        inputEmail.style.border = "1px solid rgb(53, 71, 107)";

        submitBtn.style.border = "1px solid white";
        submitBtn.style.backgroundColor = "#0F182C";
        document.getElementById("url").target = "_blank";
        e.target.href = `https://api.whatsapp.com/send?phone=2348109915008&text=Hi Peter, my name is ${name}. ${userMessage}. You can also reach out to me via email: ${userEmail}`;
        window.location.href = `https://api.whatsapp.com/send?phone=2348109915008&text=Hi Peter, my name is ${name}. ${userMessage}. You can also reach out to me via email: ${userEmail}`;
    }
}