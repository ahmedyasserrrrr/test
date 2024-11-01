const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
const signInForm = document.querySelector('.sign-in');
const signUpForm = document.querySelector('.sign-up');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});


signUpBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.classList.remove('active');
    signUpForm.classList.add('active');
  });

  // Switch to Sign In Form
  signInBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
  });

  // Password Match Validation
  const form = document.getElementById('signUpForm');
  form.addEventListener('submit', (e) => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      e.preventDefault(); // Prevent form submission
      alert('Passwords do not match!');
    }
  });
  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  
    if (error) {
      document.getElementById('loginMessage').innerText = `Error: ${error.message}`;
    } else {
      document.getElementById('loginMessage').innerText = `Welcome back, ${user.email}!`;
    }
  });
  