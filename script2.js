// Counter for gold reward limit
let goldCounter = 0;
const maxGoldRewards = 5;

// Function to assign magic ceremony reward with visual feedback and sound
function assignMagicReward() {
    // Play magic sound effect
    const magicSound = document.getElementById("magicSound");
    magicSound.play();

    const randomNum = Math.random() * 100;
    let rewardMessage = "";
    let characterImageSrc = "";

    if (randomNum < 49.5) {
        rewardMessage = "恭喜！您獲得了粉色優惠：覆盆子萊姆茶 + 吉拿棒優惠！";
        characterImageSrc = "圖片1.png"; // Glinda's image for Pink reward
        document.getElementById("rewardMessage").style.color = "#ff69b4"; // Pink color
    } else if (randomNum < 99) {
        rewardMessage = "恭喜！您獲得了綠色優惠：抹茶奶綠 + 吉拿棒優惠！";
        characterImageSrc = "圖片2.png"; // Elphaba's image for Green reward
        document.getElementById("rewardMessage").style.color = "#32cd32"; // Green color
    } else if (randomNum >= 99 && goldCounter < maxGoldRewards) {
        rewardMessage = "恭喜！您獲得了金色獎勵：魔法壞女巫首映票在西門町大戲院！";
        document.getElementById("rewardMessage").style.color = "#ffd700"; // Gold color
        goldCounter++;
    } else {
        rewardMessage = "恭喜！您獲得了綠色優惠：抹茶奶綠 + 吉拿棒優惠！";
        characterImageSrc = "圖片2.png"; // Elphaba's image for Green reward
        document.getElementById("rewardMessage").style.color = "#32cd32"; // Green color
    }

    // Set the character image and display the reward message
    const characterImage = document.getElementById("characterImage");
    characterImage.src = characterImageSrc;
    characterImage.style.display = characterImageSrc ? "block" : "none";
    document.getElementById("rewardMessage").innerText = rewardMessage;
}

// Event listener for "接受魔法儀式" button
document.getElementById("magicButton").addEventListener("click", assignMagicReward);
