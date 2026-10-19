---
prev:
  text: Back
  link: /exercises/02-arrange-flow-cards
next:
  text: Continue
  link: /exercises/04-ai-coaching
---

<section class="course-hero exercise-hero" aria-labelledby="exercise-3-·-build-an-email-flow">

<div class="course-hero-art">

![A learner runs a simple flow with one input and one email output.](/images/email-flow.png)

</div>

<div class="course-hero-content">

# Exercise 3 · Build an email flow

## Goal

Build a two-step flow, then receive two emails that match two different inputs. Use fictional information and send both emails to your own work mailbox for practice.

</div>

</section>

In the morning, your group mapped a training request and looked for repeated work. Now apply the same method to a separate weekly-report scenario: build a reusable request email with one blank for missing information. You decide what to request and check the recipient before running it.

> **License:** This lab uses the Standard Office 365 Outlook connector. Power Automate cloud-flow entitlement, Exchange Online mailbox access and organisational permissions must be confirmed before training. The design requires no Premium connector or paid Copilot add-on.

## What you need

Have a computer, browser, approved environment and your own Outlook connection. Read [Setup and troubleshooting](/preparation). Keep [email copy](/downloads/email-copy.txt) and [test inputs](/downloads/test-inputs.txt) available. Use fictional content and send only to yourself; never share accounts.

```mermaid
flowchart TD
 A["Manually trigger a flow: RequestedItem"] --> B["Office 365 Outlook: Send an email (V2)"]
```

## Steps

### Orientation and demonstration

Open Power Automate and Outlook, then check your identity and environment with the instructor. Watch the demonstration before you build. The input is the value supplied at run time; Dynamic content passes that value into the email. Save stores the instructions; Run sends a real practice email.

### Practice 1: Create the manual trigger

![A learner checks a simple manual trigger with one input.](/images/practice-03-01-manual-trigger.webp)

**Primary target:** Create a manual trigger with one required Text input for the missing report item.

1. Open [Power Automate](https://make.powerautomate.com) with your work account and check the organiser-approved environment.
2. Select **Create** → **Instant cloud flow**.
3. In **Flow name**, enter:

   ```text
   B3-MyInformationRequest
   ```

4. Select **Manually trigger a flow**, then **Create**.
5. Select the trigger card. In **Parameters**, select **Add an input** → **Text**. Change the input name from Text to:

   ```text
   RequestedItem
   ```

6. Stay in the same designer and continue to Practice 2. Add the email action before saving the complete flow.

#### Check your result

The trigger has exactly one Text input named RequestedItem, set as required. You can explain what a person will enter when they run it.

### Practice 2: Configure the email with Dynamic content

![A learner inserts one highlighted token into a reusable email.](/images/practice-03-02-email-token.webp)

**Primary target:** Configure and save an email action that uses the trigger's input in its request line.

1. Select **+** below the trigger → **Add an action**. Search:

   ```text
   Send an email (V2)
   ```

2. Select **Send an email (V2)** under **Office 365 Outlook**, not Outlook.com. If asked to sign in, use your own organisational work account.
3. In **To**, enter your own work email and check the complete address. Leave CC/BCC empty. Keep this recipient fixed; do not add a recipient input.
4. Paste this **Subject**:

   ```text
   [TRAINING] Information request for weekly report
   ```

5. Paste this **Body**:

   ```text
   Hello,

   Please provide:
   This information is for the weekly report.
   If it is not ready, please tell me the expected delivery date.

   Thank you.
   This is a training message.
   ```

6. Click immediately after `Please provide:` in **Body** and type one space.
7. Click inside **Body**. Select the blue lightning-bolt button (**⚡**, **Insert dynamic content**) beside the field. If the button is not visible, type `/` in the field and select **Insert dynamic content**.
8. Search for and select `RequestedItem` under **Manually trigger a flow**. Keep the surrounding email text unchanged.
9. Check that the request line contains one inserted token. Do not type the word RequestedItem or a sample requested item into that blank. Keep one trigger and one email action, with no attachments or changed From.
10. Select **Save** and resolve any reported issue before testing.

> **Think of a reusable letter:** The token marks the blank; the value you enter at Run fills it. Typing the input's name would print that name in every email instead.

#### Check your result

The flow saves with your own work email in To, CC/BCC empty and the RequestedItem token after “Please provide:”. The coordinator still chooses the item and checks the recipient.

### Practice 3: Test and compare two results

![A learner compares two emails with different input results.](/images/practice-03-03-compare-tests.webp)

**Primary target:** Verify that changing the run-time input changes the received request without editing the email action.

#### Test A

1. Predict one email to yourself with this requested item:

   ```text
   List of outstanding tasks
   ```

2. Select **Test** → **Manually** → **Test**. If a connection check appears, confirm that Office 365 Outlook uses your own work account. Continue only when the connection is ready; ask the instructor if it is wrong or blocked.
3. Enter the value above in `RequestedItem`. Check the value and your recipient, then select **Run flow** once.
4. Wait for completion. Open the flow details and **Run history**, then inspect the relevant run and its action result.
5. Open Outlook. Check Inbox/Junk, recipient, subject and request line against the expected request line: `Please provide: List of outstanding tasks`. Use the run time to identify the correct message.
6. Record the input, run time, status and actual email result in your own notes. If the email is missing, investigate before running again.

#### Check your result

Run history and a received email support the result for input A. If you only watched a demonstration, record that you have not run your own flow.

#### Test B

1. Predict that the recipient, subject and surrounding message stay the same.
2. Test again with this `RequestedItem`:

   ```text
   Expected completion date
   ```

3. Run once, wait, and check Run history and the received email against the expected request line: `Please provide: Expected completion date`.
4. Compare messages A and B on your own screen. Ask a partner to point out the change while you retain control of the account. Check that B contains neither A's item nor the literal word RequestedItem.
5. Record the second result separately. If a correction is needed, fix, Save and test again; identify the extra run as a correction rather than replacing the first record.

#### Check your result

Two received emails match the two inputs. Explain where the token gets its value and where that value appears.

### Optional Practice 4 · Create a follow-up task

![A learner reviews an email leading to a new personal follow-up task with an unchecked box.](/images/practice-03-04-follow-up-task.png)

Reuse your input to create a personal task after sending the request email.

**Start only after Tests A and B succeed**, if time remains and your Microsoft To Do access is ready. Skipping this practice does not affect completion of Exercise 3 or access to Exercise 4.

1. Open Microsoft To Do with your own organisational account. Select **New list** and name your personal practice list:

   ```text
   B3 Practice
   ```

2. Return to your existing flow. Select **+** after **Send an email (V2)** → **Add an action**. Search for:

   ```text
   Add a to-do (V3)
   ```

3. Select this Action under **Microsoft To-Do (Business)**. Use your own approved connection. If access is blocked or your list is unavailable, stop and ask the instructor/TA; keep the completed email exercise as your result.
4. In **To-do List**, select **B3 Practice**. In **Title**, type:

   ```text
   Follow up:
   ```

5. Add one space after the colon, then insert **RequestedItem** from **Manually trigger a flow** using Dynamic content. Do not type the token name or a sample item as fixed text.

<div class="flow-field-reference" aria-label="To Do Title field reference">
  <div class="flow-field-label">Title</div>
  <div class="flow-field-value"><span class="flow-field-literal">Follow up: </span><span class="flow-field-token" aria-label="Inserted Dynamic content token: RequestedItem">RequestedItem</span></div>
  <p>Type <strong>Follow up:</strong> and one space. Insert the highlighted token from the manual trigger.</p>
</div>

6. Leave dates, reminders and other optional fields unset. Keep the email recipient and content unchanged. Your flow now has one Trigger and two Actions: **manual start → send email → create task**.
7. Select **Save**. Predict one additional email and one matching task, then run once with:

   ```text
   Expected completion date
   ```

8. Check the new run in **Run history**, the received email and **B3 Practice** in Microsoft To Do. The task title should be:

   ```text
   Follow up: Expected completion date
   ```

9. Record this optional test separately from Tests A and B. If a task is missing, inspect the To Do Action before retrying: the email may already have been sent.

**Check your result:** The new run shows both Actions succeeded, and you can show the matching email and follow-up task. Explain how the same input supplies both outputs.

Each run creates another email and task. The flow does not detect replies or complete tasks automatically. No due date or reminder is configured in this practice. You can manually complete or delete your fictional practice task afterward.

> **Access:** Microsoft To-Do (Business) is a Standard connector, but your account, service access and organisational permissions still need confirmation. Do not buy access or change policies. See the [Microsoft connector reference](https://learn.microsoft.com/en-us/connectors/todo/#add-a-to-do-v3).

## Support and recap

After Tests A and B, try only the optional To Do practice above if access and time allow, or help a partner identify checkpoints. Do not add other features. The flow does not identify missing information, read replies or prevent duplicates. After the break, Exercise 4 uses AI to design a separate simple flow with fictional information; you will not build or run that design.


::: details Help: different controls, wrong text or missing email

- **Save draft / Publish shown:** Your environment may create solution-aware flows. Ask the instructor to confirm the approved save/publish route before testing; do not create a Solution just to match another guide.
- **Wrong connection:** Stop before Run. Ask the instructor to select or establish your own approved connection. Never use another learner's account.
- **RequestedItem missing or printed literally:** Check the trigger input name, reopen Dynamic content from Body and insert its token. Do not use Expression.
- **Both emails contain the first item:** Remove the fixed item from the request line and insert the token. Save and retest; record the correction separately.
- **No email:** Check the relevant run time/status, recipient and Inbox/Junk before retrying. Each run can send another email.

If access is blocked, follow the demonstration and mark individual build/run as incomplete. See [Setup and troubleshooting](/preparation).

:::


[Microsoft designer guidance](https://learn.microsoft.com/power-automate/flows-designer)

## Continue

[Continue to Exercise 4 →](/exercises/04-ai-coaching)
