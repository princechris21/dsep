document.getElementById('saveProfileBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
  
    if (username && email) {
      console.log(`Username: ${username}`);
      console.log(`Email: ${email}`);
      alert('Profile saved successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  document.getElementById('changePasswordBtn').addEventListener('click', function() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (currentPassword && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        console.log('Password changed successfully!');
        alert('Password changed successfully!');
      } else {
        alert('New password and confirmation do not match.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  document.getElementById('saveSettingsBtn').addEventListener('click', function() {
    const notificationPreferences = document.getElementById('notificationPreferences').value;
    const systemConfig = document.getElementById('systemConfig').value;
  
    if (notificationPreferences && systemConfig) {
      console.log(`Notification Preferences: ${notificationPreferences}`);
      console.log(`System Configurations: ${systemConfig}`);
      alert('Settings saved successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });
  