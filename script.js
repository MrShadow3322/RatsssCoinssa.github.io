// Баланс пользователя
let userBalance = localStorage.getItem('ratcoinBalance') || getRandomBalance();
document.getElementById('balance').textContent = userBalance + ' RatCoin';

// Функция генерации случайного баланса
function getRandomBalance() {
    const balance = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    localStorage.setItem('ratcoinBalance', balance);
    return balance;
}

// Навигация между вкладками
const navButtons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('.section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionToShow = button.getAttribute('data-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionToShow).classList.add('active');
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Награда за выполнение задания
document.getElementById('claimTask').addEventListener('click', () => {
    userBalance = parseInt(userBalance) + 1000;
    localStorage.setItem('ratcoinBalance', userBalance);
    document.getElementById('balance').textContent = userBalance + ' RatCoin';
    alert('Вы получили 1000 RatCoin за подписку!');
});

// Привязка кошелька
document.getElementById('addWallet').addEventListener('click', () => {
    document.getElementById('walletModal').style.display = 'block';
});

const walletOptions = document.querySelectorAll('.wallet-option');
walletOptions.forEach(option => {
    option.addEventListener('click', () => {
        const wallet = option.getAttribute('data-wallet');
        alert('Кошелёк ' + wallet + ' привязан. Информация отправлена админу.');
        sendWalletToAdmin(wallet);
        document.getElementById('walletModal').style.display = 'none';
    });
});

// Функция отправки кошелька админу (условно)
function sendWalletToAdmin(wallet) {
    const adminUrl = 'https://t.me/Somik3o';
    console.log(`Отправка данных кошелька ${wallet} админу: ${adminUrl}`);
}
