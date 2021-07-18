function validaForm() {

    // Pega dados dos inputs
    let userName  = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;

    // Verifica se campos foram preenchidos corretamente
    if (!userName || !userEmail) {
        document.getElementById("msg").textContent = 'Digite nome e e-mail válido.';
        document.getElementById("msg").style.display = 'inline-block';
        document.getElementById("msg").style.backgroundColor = '#9a4a4a';
    } else {
        if ((userName.trim() == '') || (userEmail.trim() == '')) {
            document.getElementById("msg").textContent = 'Digite nome e e-mail válido.';
            document.getElementById("msg").style.display = 'inline-block';
            document.getElementById("msg").style.backgroundColor = '#9a4a4a';
            return;
        } else {
            setUserInfo(userName, userEmail);
        }
    }
}

function setUserInfo(userName, userEmail) {
    
    let data = {
        userName,
        userEmail
    }

    let dataConvert = JSON.stringify(data);
    localStorage.setItem('userInfo', dataConvert);
    document.getElementById("msg").textContent = `Parabéns, ${userName[0].toUpperCase() + userName.substr(1)}. Seu cadastro foi realizado.`;
    document.getElementById("msg").style.display = 'inline-block';
    document.getElementById("msg").style.backgroundColor = '#538253';
}