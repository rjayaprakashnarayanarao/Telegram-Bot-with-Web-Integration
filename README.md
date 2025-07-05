
# 🎯 Spin2Earn – Telegram Bot Game with Web Integration

**Spin2Earn** is an engaging Telegram-based spin game where users spin a digital wheel to earn coins. These coins can be accumulated through various actions and later converted into real money at a **1000:1 ratio**. The platform is designed for mobile use and integrates directly with Telegram via a bot, offering tasks, daily check-ins, ad rewards, and referral benefits.

---

## ✨ Features

- 🎡 **Spin Wheel Game**: Spin to earn random amounts of coins  
- 💰 **Coin Conversion**: Coins can be converted to real money (1000:1 ratio)  
- 🗓 **Daily & Weekly Tasks**: Includes daily check-ins and ad-watching bonuses  
- 📢 **Promotions**: Join promoted Telegram channels for extra rewards  
- 👥 **Referral System**: Earn 10% of the coins collected by your referrals  
- 📱 **Mobile Optimized**: Restricted to mobile devices only using media queries  
- 🤖 **Telegram Bot Integration**: Seamless interaction via Telegram  

---

## 🗂 Project Structure

```
Telegram-Bot-with-Web-Integration-main/
├── client/                 # Web frontend (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server/                 # Node.js backend
│   ├── bot.js              # Telegram Bot logic
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── ...
├── .env                    # Environment variables
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm  
- MongoDB Atlas account or local MongoDB setup  

### Clone and Run Locally

```bash
git clone https://github.com/rjayaprakashnarayanarao/spin2earn.git
cd spin2earn
npm install
npm run dev
```

### Environment Variables (`.env`)

Create a `.env` file in the root directory and include the following:

```env
TOKEN=                # Telegram Bot Token
PORT=3000
WEBAPP=https://spin2earn.onrender.com
SALT=10
BOT_USERNAME=spin_2_Earn_bot
MongoDBURL=           # MongoDB Connection String
```

---

## ⚙️ How It Works

1. User interacts with the Telegram bot: [@spin_2_Earn_bot](https://t.me/spin_2_Earn_bot)  
2. The bot provides a mobile-only web interface to play the game.  
3. Users spin a wheel to earn coins.  
4. Complete daily/weekly tasks like:
   - Daily check-in  
   - Watching ads  
   - Joining promoted channels  
5. Users earn coins and referral bonuses.  
6. Coins can be exchanged for real money within the platform.  

---

## 📘 Learn More

This project uses the following technologies:

- **Backend**: Node.js + Express.js  
- **Database**: MongoDB (via Mongoose)  
- **Frontend**: HTML, CSS, JavaScript  
- **Telegram Bot**: Telethon
- **Hosting**: Render  
- **Version Control**: GitHub  

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it.

---

## 📬 Contact

**Author**: Jaya Prakash Narayana Rao  
- GitHub: [rjayaprakashnarayanarao](https://github.com/rjayaprakashnarayanarao)  
- Email: [rjayaprakashnarayanarao@gmail.com](mailto:rjayaprakashnarayanarao@gmail.com)  
- Phone: +91 93908 66948  

---

> Built for fun and rewards! 🎁
