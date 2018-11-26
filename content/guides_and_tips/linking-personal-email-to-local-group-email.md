---
title: Linking Personal Email to Local Group Email
date: 2018-11-14T08:26:57.618Z
description: >-
  We have decided to migrate to a great new email service, Migadu. What this
  means for you is that we will be setting up new email accounts with mailboxes
  for you and your group. You can either access your emails through this
  account, or you can configure your personal email accounts to receive and send
  emails using your EA Group email address. We are on hand to give you help with
  whatever approach you prefer.
author: Local Area Effective Altruism Network
originalPublicationURL: >-
  https://docs.google.com/document/d/1YdkjLgYMoydn_lZ9NRDAsvrMTHeANp2WcoOa9EwMD7M
license:
  - name: Creative Commons Attribution-ShareAlike 3.0
    url: 'https://creativecommons.org/licenses/by-sa/3.0/legalcode'
relatedArticles:
  - {}
---
If you already sort of know how to do this, you can skip ahead to the Configuration settings for the tech-savvy. If you don’t have time to do the setup yet but urgently need to check your group mailbox, use your new [Migadu](https://www.migadu.com/en/index.html) webmail account (details below). Otherwise read on and follow all the steps.

How to use webmail
How to change your Migadu webmail password
A note about aliases
Step-by-step guide to configure EA Group email addresses in Gmail
Sending from an EA Group alias address in Gmail
Configuration settings for the tech-savvy

## How to use webmail

To check your EA Group mailbox directly without it going through to your personal email client (eg. Gmail, Outlook, etc), you may visit https://webmail.migadu.com/ where you can login using the account details we give you, and navigate to the inbox. To enter this way, enter your full group email address (eg. crystal@ealondon.com) and the password of your Migadu email account. This is the place where you will always be able to see your emails, even if the import into your personal (e.g. gmail) mailbox isn’t working.

**If this is your first time using webmail**, we will send a default password to you by email (please contact tech@rtcharity.org if you don’t have a default password). The first thing you must do is change the default password to something new.

How to change your Migadu webmail password

**Step 1**
Log in to Migadu webmail using the steps above. Once logged in, there are three icons in the bottom left corner, click the cog (the third one) which will open a menu:

**Step 2**
In this menu, click Password:

**Step 3**
In “Current password” put the default password you were given. Make a new password (We recommend either very long plain passwords or passwords with special characters, numbers, uppercase, and lowercase letters). Click “Set new password”.

## 

A note about aliases

An alias is like a “nickname” for email. For example, we can make info@example.com be an alias that passes everything it receives to crystal@example.com. This is a very powerful way to have more than one address without actually having more than one mailbox! 

When we create an alias for you in Migadu, the typical procedure we will follow is to make a mailbox for it, and then set up an alias address to go with it. What this means is that you will still be able to log in to that mailbox in webmail, but you will not have to follow the Gmail import guide for it, because it will automatically forward mail to your main address. You will instead follow this guide so that you can send from the address. Even for alias mailboxes, **it is important** to go in and change the password to something other than the temporary password. 

To clarify, here’s an example:

If your name is Sally and you are in charge of donations at EA North Pole, and we tell you that we have created a mailbox for you at sally@eanorthpole.com as well as an alias donations@eanorthpole.com, you will:
Use these steps to set up sally@eanorthpole.com
Go to webmail and change the password for donations@eanorthpole.com 
Use these steps to set up donations@eanorthpole.com so that you can send from that address

If Sally decides to leave EA North Pole and instead Billy will be taking care of donations, you will need to ask us to set up a mailbox for Billy and change the alias to send to Billy. Billy will still be able to see the entire history of the donations mailbox through webmail, which is neat.

## 

Step-by-step guide to configure EA Group email addresses in Gmail

**PREREQUISITE**

Make sure you have changed the password from the default we provide to something else! If there are other people in your organization that need access to your group email address, make sure to share this with them. Please note: we can provide as many personal accounts for organisers in your group as you like. These would each have their own passwords. Just contact us if you need more!

**Step 1**
From your Gmail inbox, go to “Settings” by clicking on the cog icon on the top right:

**Step 2**
Select “Account and Import”:

**Step 3**
Next to “Check mail from other accounts” select “Add a mail account”:

**Step 4**
In the popup, type in your LEAN email address (eg. <your-name>@<your-domain>):

**Step 5**
Keep the default of “Import emails from my other account (POP3)” and click Next:

**Step 6**
Use your full email (same as before) as the username, and the password you use for webmail. The POP server is imap.migadu.com and the port is 995. Make sure “Leave a copy of retrieved message on the server” and “Always use a secure connection (SSL)” are selected. Your form should look like the following screenshot. Once ready, click “Add Account”:

**Step 7**
At this point, if you would also like to be able to send mail from the group address (as opposed to just receiving emails sent to that address), select “Yes I want to be able to send mail as…” and click “Next”. Otherwise click “No” and you’re good to go.

**Step 8**
Add the name that you want people in your group to know you by, and the same email address as before. For instance, if you are organising EA North Pole, you might put your own name here (e.g. “Jack”) or you might choose to put the group’s name (“EA North Pole”). Make sure “Treat as an alias” is checked, then click “Next Step”:

**Step 9**
Use smtp.migadu.com as SMTP Server, port 587, the same email address, the same password, and choose TLS. Easy! Click “Add account”:

**Step 10**
You should reach this lovely screen: 

**Step 11**
You’re almost home free. Login to webmail. You should see a Gmail confirmation email. Copy the verification over into the popup from above, click “Verify”, and you should be good to go! You should now see your EA account listed in “Send mail as” as well as “Check mail from other accounts” in your Gmail settings area. 

If you have any trouble with the above steps, feel free to contact tech@rtcharity.org.
Please note: the steps for configuring your personal mail client are similar across different providers like Hotmail, Outlook, Yahoo etc. However if you can’t work it out, we are happy to help.

## 

Sending from an EA Group alias address in Gmail

**NOTE:**
You **do not** need to do this if you just finished all of Steps 1 through 11 in the step-by-step guide. Also make sure you’ve changed the password for the alias mailbox. Also make sure you’ve read this.

**Step 1**
From your Gmail inbox, go to “Settings” by clicking on the cog icon on the top right:

**Step 2**
Select “Account and Import”:

**Step 3**
Next to “Send mail as” select “Add another email address”:

**Step 4**
Add the name that you want this alias to be associated with, and the alias address. Make sure “Treat as an alias” is checked, then click “Next Step”:

**Step 5**
Fill in the following:
SMTP Server: smtp.migadu.com
Port: 587
Username: the alias email address (eg. boss@northpole.com, not your main mailbox)
Password: the password for that address (eg. the password for boss@northpole.com, not the password for your main mailbox)

Choose TLS. Easy! Click “Add account”:

**Step 6**
You should reach this lovely screen: 

**Step 7**
You’re almost home free. Login to webmail to the alias mailbox. You should see a Gmail confirmation email. Copy the verification over into the popup from above, click “Verify”, and you should be good to go! You should now see your alias address listed in “Send mail as” in your Gmail settings area.

## 

Configuration settings for the tech-savvy

For people who already know all about configuring and connecting email accounts, here are the details you’ll need:

Incoming Mail / IMAP

IMAP Server: imap.migadu.com
Port: 993
Connection Security: SSL/TLS
Email: crystal.eaexample.org
Username: crystal.eaexample.org

Outgoing Mail / SMTP

SMTP Server: smtp.migadu.com
Port: 587
Connection Security: STARTTLS
Authentication: Normal / Plain password
Username: crystal.eaexample.org

Incoming Mail / POP3

POP3 Server: imap.migadu.com
Port: 995
Connection Security: SSL/TLS
Email: crystal.eaexample.org
Username: crystal.eaexample.org

Webmail Access

Address: https://webmail.migadu.com or mail.<your-domain>
Username: crystal.eaexample.org
Password: \[your mailbox password]
