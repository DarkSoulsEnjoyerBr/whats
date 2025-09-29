// Close notification banner
document.querySelector('.notification-banner .close-btn').addEventListener('click', () => {
  document.querySelector('.notification-banner').style.display = 'none';
});

// Filter buttons active state toggle
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Send message on send button click or Enter key
const input = document.querySelector('.chat-input-area input[type="text"]');
const sendBtn = document.querySelector('.send-btn');

function sendMessage() {
  const text = input.value.trim();
  if (text === '') return;
  // For demo, just clear input
  input.value = '';
  // Could add message to chat here
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
