# 🪨📄✂️ Stone Paper Scissors

A simple and interactive **Stone Paper Scissors** game built using **HTML, CSS, and JavaScript**.

The player selects Stone, Paper, or Scissors, and the computer randomly generates its choice. The game then determines the winner and updates the scores and game count.

## 🎮 Features

- 🪨 Stone, 📄 Paper, and ✂️ Scissors choices
- 🤖 Random computer choice
- 🏆 Automatic winner detection
- 📊 User and computer score tracking
- 🔢 Game count tracking
- 💬 Displays game result after every round
- ⚡ Interactive UI using JavaScript event listeners

## 🛠️ Technologies Used

- **HTML5** – Structure of the game
- **CSS3** – Styling and layout
- **JavaScript** – Game logic and DOM manipulation

## 📂 Project Structure

```text
Stone-Paper-Scissors/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧠 How the Game Works

1. The player clicks on **Stone**, **Paper**, or **Scissors**.
2. JavaScript detects the player's choice.
3. The computer randomly selects one of the three choices.
4. The game compares both choices.
5. The winner is determined according to the rules:
   
   - 🪨 Stone beats ✂️ Scissors
   - 📄 Paper beats 🪨 Stone
   - ✂️ Scissors beats 📄 Paper
6. The winner's score is increased.
7. The total game count is updated.

## 📊 Scoring

| Result | Score |
|---|---|
| Player Wins | User score +1 |
| Computer Wins | Computer score +1 |
| Draw | No score change |

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/stone-paper-scissors.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it! 🎮

## 📸 Game Preview

Add a screenshot of your game here:

![Project Preview](project-preview.png)

## 🔮 Future Improvements

Some features that can be added later:

- 🔄 Reset game button
- 🎨 Better animations and UI
- 🔊 Sound effects
- 🏅 Best-of-5 or Best-of-10 mode
- 📱 Improved mobile responsiveness
- 🌙 Dark/light mode
- 💾 Save scores using Local Storage

## 👨‍💻 Author

**Suresh Suthar**

Built as a JavaScript practice project to understand **DOM manipulation, event listeners, functions, random numbers, and game logic**.
