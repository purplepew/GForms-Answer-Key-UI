# Google Forms Quiz Assistant - Simple Setup Guide

This guide is for non-technical users.
It shows everything from downloading a compressed folder to getting a Gemini API key and using the extension.

## What this extension does

- Reads questions from a Google Form quiz page.
- Shows suggested answers under each question.
- Does **not** auto-submit or auto-fill your form.

## Before you start

You need:

- Google Chrome browser
- A Google account
- Internet access

---

## Step 1: Download the compressed folder (ZIP)

1. Download the extension folder as a `.zip` file.
2. Save it somewhere easy to find, like your Desktop or Downloads folder.

## Step 2: Unzip (extract) the folder

1. Find the downloaded `.zip` file.
2. Right-click it.
3. Click **Extract All...**
4. Choose a location you can find later.
5. Click **Extract**.

You should now have a normal folder (not a ZIP) that contains files like:

- `manifest.json`
- `background.js`
- `content.js`
- `popup.html`
- `popup.js`

---

## Step 3: Install the extension in Chrome (Load unpacked)

1. Open Chrome.
2. In the address bar, type: `chrome://extensions` and press Enter.
3. Turn on **Developer mode** (top-right).
4. Click **Load unpacked** (top-left).
5. Select the extracted extension folder.
6. Click **Select Folder**.

If installed correctly, you will see **Google Forms Quiz Assistant** in your extensions list.

Optional but helpful:

1. Click the puzzle icon in Chrome (top-right).
2. Find **Google Forms Quiz Assistant**.
3. Click the pin icon so it stays visible.

---

## Step 4: Get a Gemini API key (Google AI Studio)

1. Open: https://aistudio.google.com/
2. Sign in with your Google account.
3. Look for **Get API key** (wording can vary slightly).
4. Create a new API key.
5. Copy the key.

Important:

- Keep your key private.
- Do not share it in screenshots, chats, or public posts.

---

## Step 5: Save your Gemini key in the extension

1. Click the extension icon in Chrome.
2. In the popup, you will see **Google AI Studio Token**.
3. Paste your API key into the **API token** field.
4. Click **Save**.
5. You should see a message like **Token saved locally.**

Notes:

- The key is saved in your browser local extension storage.
- You can remove it anytime with the **Clear** button.

---

## Step 6: Use it on a Google Form quiz

1. Open a Google Form quiz page in Chrome.
2. Wait a moment for the page to fully load.
3. You should see a small **Quiz Assistant** panel near the form.
4. Use:
   - **Batch Answer** = get answers for all questions at once
   - **Single Answer** = get answer for one specific question
5. Answers appear below questions.

---

## What to expect

- Multiple-choice: it tries to choose the best option.
- Open-ended: it gives a short likely answer.
- Sometimes answers may be wrong. Always review before submitting.

---

## Troubleshooting (easy fixes)

## 1) Extension does not show on the form page

Try this:

1. Refresh the Google Form tab.
2. Confirm URL starts with: `https://docs.google.com/forms/`
3. Go to `chrome://extensions` and check extension is enabled.

## 2) It says token/key is missing

1. Click extension icon.
2. Paste key again.
3. Click **Save**.
4. Return to the form and refresh.

## 3) API request failed / no answers

Possible reasons:

- API key is invalid or expired
- Temporary internet issue
- Google API service issue

Try:

1. Re-copy and re-save your API key.
2. Refresh page.
3. Wait a minute and try again.

## 4) Wrong answers

- AI answers are suggestions, not guaranteed correct.
- Always verify with your own knowledge.

---

## Privacy and safety

- The extension reads question text from Google Forms pages.
- It sends question data to the Gemini API to generate answers.
- Your API key should be treated like a password.

---

## Quick start (short version)

1. Download ZIP
2. Extract folder
3. Chrome -> `chrome://extensions` -> Developer mode ON -> Load unpacked
4. Get Gemini key from AI Studio
5. Paste key into extension popup and click Save
6. Open Google Form and click Batch Answer or Single Answer

Done.
