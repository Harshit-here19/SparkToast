
# ModalModule Component

ModalModule is a simple pop-up box system for your website. It can ask a user to **Confirm** an action (Yes/No) or ask them to **Type text** into an input box.

It matches dark-themed websites perfectly and animates smoothly.

----------

## 🚀 3-Step Setup Guide

### Step 1: Copy the script file

Make sure you have a file named `ModalModule.js` in your project folder.

### Step 2: Link it in your HTML

Paste this single line at the very bottom of your HTML file, right before the closing `</body>` tag:

HTML

```
<script src="ModalModule.js"></script>
<script src="your-script.js"></script>

```

### Step 3: Call it in your JavaScript

Now you can open a pop-up window anywhere in `your-script.js`.

----------

## 🖼 Simple Code Examples

### Example 1: A Basic Yes/No Confirmation Box

Use this when you want to make sure a user actually wants to do something (like deleting an item).

JavaScript

```
async function askToDelete() {
  // 1. Open the modal window and wait for a click
  const choice = await ModalModule.open(
    "Are you sure?", 
    "This will delete your item forever."
  );

  // 2. See what the user clicked (choice will be true or false)
  if (choice === true) {
    alert("Item deleted!");
  } else {
    alert("Action canceled.");
  }
}

```

### Example 2: Making the Confirm Button Red (Destructive)

If a user is about to do something dangerous, you can turn the confirmation button red to warn them.

JavaScript

```
async function wipeData() {
  const choice = await ModalModule.open(
    "Danger Zone", 
    "Do you want to clear your entire dashboard data?", 
    {
      confirmText: "Yes, Delete Everything",
      cancelText: "No, Keep It",
      isDestructive: true // This makes the "Yes" button red
    }
  );

  if (choice) {
    alert("Everything is gone!");
  }
}

```

### Example 3: Asking the User to Type Text (Prompt)

Use this when you need to grab a quick piece of text from the user, like their name.

JavaScript

```
async function askForName() {
  // 1. Tell the modal to act as a "prompt" text box
  const enteredName = await ModalModule.open(
    "What is your name?", 
    "Please enter your name below:", 
    {
      type: "prompt",
      placeholder: "Type your name here..."
    }
  );

  // 2. Check if they typed something or closed the window
  if (enteredName === null) {
    alert("You closed the window without typing.");
  } else if (enteredName.trim() === "") {
    alert("You left the text box empty!");
  } else {
    alert("Hello, " + enteredName + "!");
  }
}

```

----------

## ⚙️ Custom Settings Cheatsheet

Whenever you use `ModalModule.open("Title", "Message", { ... })`, you can pass these settings inside the curly brackets `{}` to customize how it looks and behaves:

| Setting | What it does | Example options |
| :--- | :--- | :--- |
| **type** | Changes it from a Yes/No box to a Text Box | `'confirm'` or `'prompt'` |
| **placeholder** | Hint text inside the text box | `'e.g. John Doe'` |
| **confirmText** | Changes the text on the "OK" button | `'Yes'`, `'Save'`, `'Submit'` |
| **cancelText** | Changes the text on the "Cancel" button | `'No'`, `'Go Back'`, `'Close'` |
| **isDestructive** | Turns the main action button red | `true` or `false` |
