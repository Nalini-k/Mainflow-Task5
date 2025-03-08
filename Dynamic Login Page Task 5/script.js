document.addEventListener("DOMContentLoaded", function() {
    // Create form elements
    const form = document.createElement('form');
    form.action = '';
    form.method = 'post';
    form.id = 'form';
  
    const formBody = document.createElement('div');
    formBody.id = 'form-body';
  
    const welcomeLines = document.createElement('div');
    welcomeLines.id = 'welcome-lines';
    const welcomeLine1 = document.createElement('div');
    welcomeLine1.id = 'welcome-line-1';
    welcomeLine1.textContent = 'Login';
    const welcomeLine2 = document.createElement('div');
    welcomeLine2.id = 'welcome-line-2';
    welcomeLine2.textContent = 'Welcome Back';
  
    welcomeLines.appendChild(welcomeLine1);
    welcomeLines.appendChild(welcomeLine2);
  
    const inputArea = document.createElement('div');
    inputArea.id = 'input-area';
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.placeholder = 'Email Address';
    emailInput.className = 'form-inp';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.className = 'form-inp';
  
    inputArea.appendChild(emailInput);
    inputArea.appendChild(passwordInput);
  
    const submitButtonCvr = document.createElement('div');
    submitButtonCvr.id = 'submit-button-cvr';
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.type = 'submit';
    submitButton.textContent = 'Sign In';
  
    submitButtonCvr.appendChild(submitButton);
  
    const forgotPass = document.createElement('div');
    forgotPass.id = 'forgot-pass';
    const forgotPassLink = document.createElement('a');
    forgotPassLink.href = '#';
    forgotPassLink.textContent = 'Forgot password?';
  
    forgotPass.appendChild(forgotPassLink);
  
    const bar = document.createElement('div');
    bar.id = 'bar';
  
    formBody.appendChild(welcomeLines);
    formBody.appendChild(inputArea);
    formBody.appendChild(submitButtonCvr);
    formBody.appendChild(forgotPass);
    formBody.appendChild(bar);
    form.appendChild(formBody);
  
    document.getElementById('form-ui').appendChild(form);
  
    // Add event listener for the submit button
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (email === '' || password === '') {
        alert('Please fill in all fields.');
        if (email === '') emailInput.style.border = '1px solid red';
        if (password === '') passwordInput.style.border = '1px solid red';
      } else {
        alert(`Email: ${email}\nPassword: ${password}`);
      }
    });
  
    // Add input event listeners to remove red border on input
    emailInput.addEventListener('input', function() {
      emailInput.style.border = '1px solid #e3e3e3';
    });
    passwordInput.addEventListener('input', function() {
      passwordInput.style.border = '1px solid #e3e3e3';
    });
  });
  