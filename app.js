// Simple simulated interaction for AI Assistant
function jumpToTime(seconds) {
  const video = document.querySelector('video');
  if (video) {
    video.currentTime = seconds;
    video.play();
    const response = document.getElementById("ai-response");
    response.innerText = `Navigated to ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')} for obstacle essay tips.`;
  }
}
