---
prev:
  text: Back
  link: /exercises/03-build-information-request
next:
  text: Continue
  link: /resources/downloads
---

<span id="exercise-4-·-review-with-ai"></span>

<section class="course-hero exercise-hero" aria-labelledby="exercise-4-·-design-a-simple-flow-with-ai">

<div class="course-hero-art">

![Colleagues discuss AI advice and check it against a checklist.](/images/ai-review.png)

</div>

<div class="course-hero-content">

# Exercise 4 · Design a simple flow with AI

## Goal

Turn a fictional workplace scenario into **one Trigger and two or three Actions** with help from AI. Think of it as writing a recipe before cooking: a clear plan is useful, but it is not proof that the result works.

</div>

</section>

**Design only:** finish with a text diagram, build guidance and a fictional walkthrough. Do not create or run this flow, or change your Exercise 3 flow.

## What you need

Open an organisation-approved AI app, such as SecureGPT **if your organisation permits it**. Access and any licence must be confirmed before training. No purchase or working flow is needed for the [instructor-authored fallback](/resources/fallback).

Use fictional text only. No screenshots, uploads or real workplace information are needed.

## Steps

<div class="ai-design-prompts">

<span id="practice-1-·-ask-a-focused-question"></span>

### Practice 1 · Describe your scenario

Get a simple flow proposal from a clear workplace request.

1. Start a new chat in the approved AI app. Paste this **coach setup prompt** first.

   ```text
   Act as a patient Power Automate coach for a beginner.
   Use plain English and fictional information only.
   I am designing today, not building or running a flow.

   For my next scenario:
   - Propose exactly one Trigger and two or three Actions.
   - Name the app and the Power Automate step for each.
   - Keep one straight path: no branches, loops, approvals,
     Premium connectors, expressions or AI actions.
   - Explain what information each step needs and where it comes from.
   - State assumptions and access requirements. Ask a short question
     if essential information is missing; do not invent access.
   - Show a narrow vertical diagram in a fenced plain-text block.
     Use [Trigger: ...], [Action 1: ...], | and v.
     Wrap long labels onto short lines, about 32 characters each.
     Do not use Mermaid, images, HTML or special rendering.
   - Below the diagram, give the full step names and a short explanation.
   - For field guidance, list each field separately in UI order.
     Distinguish text to type from Dynamic content to insert.
     Do not invent token names or force tokens where fixed text is enough.
   - Treat the output as an unverified design, not a working or approved flow.
   Do not ask for real messages, private URLs, credentials or raw run data.
   Wait for my scenario before proposing a flow.
   ```

2. Choose **one** scenario below. Paste its prompt into the same chat. Start with **Weekly reminder** if unsure.
3. Read the proposal. Check that it has one Trigger and two or three Actions.

#### Office supplies

```text
When someone submits an office-supply request form, I want to email the office coordinator and send the person a confirmation. How could I automate this?
```

For this fictional example, assume the form collects the item and requester email. A confirmation means the request was received, not approved.

#### Weekly reminder · Suggested starting choice

```text
Every Monday morning, I want to email my team a reminder to update their task list and post the same reminder in Teams. How could I automate this?
```

Assume an existing practice team/channel and a fixed reminder message. Ask the AI to flag the time zone and recipients to confirm.

#### Document notification

```text
When a new file is added to a practice folder in OneDrive, I want to email the coordinator and notify the team in Teams. How could I automate this?
```

Use OneDrive for Business. Notify people of the file name; do not attach the file or create sharing links. Assume an existing practice folder and Teams channel.

**Check your result:** You can point to the starting event, each Action and the intended workplace result.

<span id="practice-2-·-evaluate-the-advice"></span>

### Practice 2 · Explore how to build it

Use follow-up questions to turn the proposal into understandable build guidance.

![A learner examines AI advice and compares its suggested steps.](/images/practice-04-02-evaluate-advice.webp)

1. In the same chat, ask for a beginner-friendly build guide.

   ```text
   Show me how I could create this flow in Power Automate, step by step. Name the trigger and actions, explain the main fields, and show what I would type versus insert from an earlier step. Use fictional examples. List anything I need prepared first. I am only planning today.
   ```

2. Read the guide, then ask for a fictional walkthrough and future checks.

   ```text
   Walk me through one fictional example from start to finish. What should happen at each step, and how would I check it when I build the flow later? Point out anything I should confirm with my instructor or IT team.
   ```

3. Identify what you would type, what comes from an earlier step, and what access you would need. **Read the guidance only; do not follow build or run instructions today.**

**Check your result:** You can explain the purpose of each proposed step and name one setup or access requirement.

<span id="practice-3-·-verify"></span>

### Practice 3 · Check and explain your design

Check whether the proposed sequence reaches the scenario's goal.

1. Count **one Trigger and two or three Actions**. Check that there are no branches, loops, approvals or AI actions.
2. Follow one fictional example through the diagram. Explain what each step receives and produces.
3. Check the recipients, destination and expected message. Ask the instructor/TA about unclear step names, missing information or extra complexity.
4. Keep your diagram and notes. Label the result **Design only — not built or tested**.

**Check your result:** You can explain the sequence, its expected outcome and one thing to verify before a future build. A fictional walkthrough is not evidence of a successful run.

::: details Need help checking the proposed steps?
These are possible straight-line designs, not tested flows:

- **Office supplies:** Microsoft Forms **When a new response is submitted** → **Get response details** → Office 365 Outlook **Send an email (V2)** to the coordinator → another **Send an email (V2)** to the requester. Use the response ID to retrieve details; confirm the requester email is available.
- **Weekly reminder:** Schedule **Recurrence** → Office 365 Outlook **Send an email (V2)** → Microsoft Teams **Post a message in a chat or channel**. Both messages use the same fixed reminder; the Teams step does not need the email's output.
- **Document notification:** OneDrive for Business **When a file is created (properties only)** → Office 365 Outlook **Send an email (V2)** → Microsoft Teams **Post a message in a chat or channel**. Use the new file's name in both messages; no file-content retrieval is needed.

Check suggested names against [Microsoft Forms guidance](https://learn.microsoft.com/en-us/power-automate/forms/overview), [scheduled cloud flows](https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks), [OneDrive for Business](https://learn.microsoft.com/en-us/connectors/onedriveforbusiness/) and [Teams messages](https://learn.microsoft.com/en-us/power-automate/teams/send-a-message-in-teams). Documentation does not confirm your account's access.
:::

::: details No AI access or unsure about the answer?
Use the [instructor-authored weekly-reminder example](/resources/fallback) and complete Practice 3 with it. It is not a saved AI response or proof of a working flow. If the AI cannot simplify its answer, use this example with the instructor.
:::

</div>

## Discuss and choose your next step

Explain how the follow-up questions made the advice more useful. Name one thing to confirm with your organisation before building. Keep personal notes private; there is no required submission.

## Continue

[Continue →](/resources/downloads)
