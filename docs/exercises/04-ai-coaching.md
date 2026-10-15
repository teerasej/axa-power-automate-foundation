---
prev:
  text: Back
  link: /exercises/03-build-information-request
next:
  text: Continue
  link: /resources/downloads
---

# Exercise 4 · Review with AI

![Colleagues review synthetic AI advice and check it against a checklist.](/images/ai-review.png)

**14:45–16:00 · Individual review and discussion**

## Goal
Use AI as a learning coach, then check its advice yourself. A suggestion is like a second opinion on a recipe: you still need to taste the result.

## What you need
Your two-step flow from Exercise 3 and an organisation-approved AI app. App access and any licence must be confirmed; no purchase is required for the [written fallback](/resources/fallback). Use synthetic text; an image is optional only if approved and sanitised.

## Steps

### Practice 1 · Ask a focused question — 14:45–15:10
Obtain one explanation grounded in a small, safe example.

1. Watch the 10-minute demonstration. Keep your working flow intact.
2. During the next 15 minutes, open the approved AI app. For a ready-made issue, paste this **fictional example**:

```text
Help me review a fictional beginner Power Automate flow.
The flow has Manually trigger a flow with Text input RequestedItem,
then Office 365 Outlook Send an email (V2) to my own work mailbox.
CC/BCC are empty.

Goal: use the item I enter at run time in the email request.
Input A: List of outstanding tasks
Input B: Expected completion date
Observed in this fictional example: both emails say
Please provide: List of outstanding tasks
The Body contains that fixed text and has no RequestedItem token.
The fictional runs are marked Succeeded.

Explain why a successful run can still give the wrong business result.
Suggest the smallest correction within the existing two-step flow.
Do not add connectors, actions, expressions, permissions or AI inside the flow.
Give a Predict, Try, Check test and say what actual evidence would confirm it.
Use only this synthetic context and distinguish it from a real verified repair.
```

3. Read the response and separate its observations from assumptions.

**Check your result:** You can explain why Succeeded does not necessarily mean the requested message is correct.

::: details Use your own synthetic question instead
Replace each bracketed description before sending. Do not paste real messages, credentials, private URLs or raw run data.

```text
Act as a patient Power Automate learning coach for a beginner.
Review only this two-step training flow:
Manually trigger a flow with required Text input RequestedItem,
then Office 365 Outlook Send an email (V2) to my own work mailbox.
CC/BCC are empty. Use fictional information only.

Goal: [the requested result]
Current steps: [what I can actually see]
Input: [synthetic input]
Expected email: [expected request line]
Observed result and run status: [observed evidence, or not yet run]
Question: [one thing I want to understand]

Separate observed facts from assumptions. Ask if evidence is missing.
Explain one likely check in plain English and suggest the smallest change.
Do not add actions, connectors, loops, expressions, permissions or AI inside the flow.
Do not ask for private messages, credentials, raw run data or private URLs.
Give a Predict, Try, Check test using the existing input.
If the flow already works, explain when no change is needed.
Do not claim the issue is fixed until I verify the run and received email.
```
:::

### Practice 2 · Evaluate the advice — 15:10–15:30
Choose the smallest justified change within the existing flow.

1. Compare the advice with the visible input, email Body and result.
2. Keep only advice about the existing two steps. Do not add actions, connectors, expressions, permissions or AI inside the flow.
3. Explain what evidence is missing. Ask the instructor if advice is unclear.
4. If your actual flow works, explain why no change is needed. Do not break it to match the example.

**Check your result:** One justified correction or a reason to leave the flow unchanged.

### Practice 3 · Verify — 15:30–15:40
Check the outcome rather than trusting the explanation.

1. Predict the email for input B:

   ```text
   Expected completion date
   ```

2. If a real correction is needed and access is ready, apply it, Save and run once.
3. Check Run history and the received email. The request must match the input; recipient, subject and surrounding text stay the same.
4. If no real run occurs, write a test plan and mark the result **unverified**.

**Check your result:** Actual evidence supports the result, or the missing test is clearly identified.

::: details No AI access or unsure about the answer?
Use the [instructor-written fallback review](/resources/fallback). It is an authored explanation, not a saved AI response or proof of a successful run.
:::

## Discuss and choose your next step — 15:40–16:00
Use 15 minutes for questions and five minutes to write one practical next step. Identify what you would check with your organisation before using automation at work. Keep personal notes private; there is no required submission.


## Continue

[Continue →](/resources/downloads)
