// ===============================
// GAME ↔ PARENT Messaging Script
// ===============================

(function () {

  // Store init data globally
  window.GAME_INIT_DATA = null;

  // -------------------------------
  // Listen Parent Messages
  // -------------------------------
  function listenParentMessages() {

    window.addEventListener("message", function (event) {

      const data = event.data;

      if (!data || !data.type) return;

      switch (data.type) {

        case "GAME_INIT":

          // Store payload
          window.GAME_INIT_DATA = data.payload || data;
          window.GAME_AUTO_START = true; // Flag for auto-start

          console.log("🎮 GAME_INIT received:");
          console.log(window.GAME_INIT_DATA);

          break;

        default:
          console.log("📩 Unknown message received:", data);
      }

    });

  }

  // -------------------------------
  // Send GAME_READY
  // -------------------------------
  function sendGameReady() {

    if (window.parent) {

      window.parent.postMessage(
        { type: "GAME_READY" },
        "*"
      );

      console.log("🚀 GAME_READY sent to parent");

    } else {
      console.warn("No parent window found");
    }

  }

  // -------------------------------
  // Init Function
  // -------------------------------
  function initGameMessaging() {

    listenParentMessages();
    sendGameReady();

  }

  // -------------------------------
  // Auto Init on Load
  // -------------------------------
  window.addEventListener("load", initGameMessaging);

  

})();

// =====================================
// SEND SCORE FUNCTION
// =====================================

// =====================================
// FINAL DYNAMIC COMPLETE GAMEPLAY CALL
// =====================================
async function sendScore(rank, winnerName) {

  console.log("🏁 sendScore called with rank:", rank, "winnerName:", winnerName);

  

  try {

    // 1️⃣ Init data
    const initData = window.GAME_INIT_DATA;

    if (!initData) {
      console.error("GAME_INIT_DATA not found");
      return;
    }

    const baseUrl = initData.baseUrl;
    const token   = initData.token;
    const user    = initData.user;

    // 2️⃣ API URL
    const apiUrl =
      `${baseUrl}/api/multiplayer-games/complete-gameplay`;

    // 3️⃣ Build players array dynamically
    const isWinner = rank === 1;
    const players = [
      {
        id: user.id,
        name: winnerName || user.name,
        winner: isWinner,
        score: isWinner ? 1 : 0
      }
    ];

    // 4️⃣ Final payload (correct format)
    const payload = {
      game_code: "ludo_multiplayer",
      room_code: initData.roomNumber || null,
      token_amount: initData.payAmount,
      tournament_id: null,
      creator_id: user.id,
      winner_type: "single",
      players: players
    };

    

    console.log("📤 Sending Gameplay Payload:");
    console.log(payload);
    console.log("token:", token);

    // 5️⃣ API Call
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON: " + text);
    }

    console.log("✅ Gameplay Submitted:");
    console.log(result);

    gameoverPostMessage(payload);

    return result;

  } catch (error) {

    console.error("❌ Gameplay Submit Error:", error);

  }

}

function gameoverPostMessage(payload) {
  console.log("🏁 Posting GAME_END message to parent");

  window.parent.postMessage(
  {
    type: "GAME_END",
    event: "GAME_COMPLETED",
    payload: payload
  },
  "*"
);

}



// new send score function for multiplayer gameplay completion with players data





// ===========================

