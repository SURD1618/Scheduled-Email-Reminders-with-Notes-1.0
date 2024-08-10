# Scheduled Email Reminders with Notes

## Overview

"Scheduled Email Reminders with Notes" is a Chrome extension designed to help you set reminders for emails along with personalized notes. Never miss an important follow-up by receiving timely notifications, which you can click to open your email client with the relevant details already filled in.

## Features

- **Set Email Reminders**: Schedule reminders with a specific date and time.
- **Add Personalized Notes**: Attach notes to your reminders for extra context.
- **Receive Notifications**: Get a notification when it's time for your scheduled reminder.
- **Open Email Client with Pre-filled Details**: Click on the notification to open your default email client with the email subject and note pre-filled.

## Installation

1. Clone or download the repository to your local machine.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the folder where you have stored the extension files.
5. The extension should now appear in your list of extensions.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Fill in the "Email Subject", "Note", and "Reminder Time" fields.
3. Click "Set Reminder".
4. At the scheduled time, a notification will pop up. 
5. Click the "Open Email" button in the notification to open your default email client with the subject and note pre-filled.

## Demo

Here are some screenshots to demonstrate how the extension works:

1. **Setting a Reminder:**

![Design](https://github.com/user-attachments/assets/4b414556-df35-4cb6-bd7e-73c3a62e59ae)

   
2. **Receiving a Notification:**

![image](https://github.com/user-attachments/assets/68a9b557-b4cd-4b20-8aad-2bd1bca6546b)

   
3. **Opening the Email Client:**

![image](https://github.com/user-attachments/assets/bcc27a96-4f5d-4ba8-a2d8-ec70275b769d)



## Files

- **popup.html**: The HTML file for the popup interface.
- **popup.css**: The CSS file for styling the popup.
- **popup.js**: The JavaScript file for handling user interactions in the popup.
- **background.js**: The background script that manages alarms, notifications, and opening the email client.
- **manifest.json**: The manifest file that defines the extension's properties and permissions.

## Permissions

- **storage**: To save the notes and reminders locally.
- **notifications**: To display the reminders as Chrome notifications.
- **alarms**: To trigger the reminders at the specified time.
- **tabs**: To open the default email client with the pre-filled details.

## Future Enhancements

- Option to customize the notification sound.
- Support for recurring reminders.
- Integration with other email clients and services.
