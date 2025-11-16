const authScreen = document.getElementById('authScreen');
const dashboard = document.getElementById('dashboard');

const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const authLoginForm = document.getElementById('authLoginForm');
const authSignupForm = document.getElementById('authSignupForm');

const loginBtnHeader = document.getElementById('loginBtn');
const signupBtnHeader = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');

const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginCancel = document.getElementById('loginCancel');
const signupCancel = document.getElementById('signupCancel');

const settingsBtn = document.getElementById('saveSettingsBtn');
const settingsMsg = document.getElementById('settingsMsg');

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

// Tabs (Auth Screen)
tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('tab-active');
  tabSignup.classList.remove('tab-active');
  authLoginForm.classList.remove('hidden');
  authSignupForm.classList.add('hidden');
});

tabSignup.addEventListener('click', () => {
  tabSignup.classList.add('tab-active');
  tabLogin.classList.remove('tab-active');
  authSignupForm.classList.remove('hidden');
  authLoginForm.classList.add('hidden');
});

// Auth Login Submit -> open dashboard
authLoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  authScreen.classList.add('hidden');
  dashboard.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Auth Signup Submit -> open dashboard
authSignupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  authScreen.classList.add('hidden');
  dashboard.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Header Login Button -> open login modal
loginBtnHeader.addEventListener('click', () => {
  if (typeof loginModal.showModal === 'function') {
    loginModal.showModal();
  }
});

// Header Signup Button -> open signup modal
signupBtnHeader.addEventListener('click', () => {
  if (typeof signupModal.showModal === 'function') {
    signupModal.showModal();
  }
});

// Login modal cancel
loginCancel.addEventListener('click', () => {
  loginModal.close();
});

// Signup modal cancel
signupCancel.addEventListener('click', () => {
  signupModal.close();
});

// Logout -> back to first screen
logoutBtn.addEventListener('click', () => {
  dashboard.classList.add('hidden');
  authScreen.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Settings "Save" message
settingsBtn.addEventListener('click', () => {
  settingsMsg.classList.remove('hidden');
  setTimeout(() => {
    settingsMsg.classList.add('hidden');
  }, 2000);
});

// Mobile menu toggle
if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('-translate-x-full')) {
      sidebar.classList.remove('-translate-x-full');
    } else {
      sidebar.classList.add('-translate-x-full');
    }
  });
}