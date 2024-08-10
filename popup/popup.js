document
  .getElementById("reminderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const subject = document.getElementById("emailSubject").value;
    const note = document.getElementById("emailNote").value;
    const time = new Date(
      document.getElementById("reminderTime").value
    ).getTime();

    chrome.alarms.create(subject, { when: time });
    chrome.storage.local.set({ [subject]: note });

    // Show a success message using Bootstrap's alert component
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "Reminder Set Successfully!";
    successMessage.classList.remove("d-none");
    successMessage.style.display = "block";

    // Automatically hide the success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
      successMessage.classList.add("d-none");
    }, 3000);

    // Reset the form after submission
    document.getElementById("reminderForm").reset();
  });
