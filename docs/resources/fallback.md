---
prev: false
next: false
---
<span id="instructor-authored-fallback-review"></span>

# Instructor-authored flow-design example

Use this weekly-reminder example if AI access is unavailable or its answer is unclear. Complete Practice 3 in Exercise 4 with it.

This is an **instructor-authored explanation**, not a saved AI response, tenant run or approved automation. **Design only — not built or tested.**

## Scenario

Every Monday morning, a fictional team needs a reminder to update its task list by noon. Send the same reminder by email and to an existing practice Teams channel.

## Proposed text diagram

```text
[Trigger: Schedule
 Recurrence - Monday morning]
              |
              v
[Action 1: Outlook
 Send reminder email]
              |
              v
[Action 2: Teams
 Post reminder in channel]
```

The full Action names are Office 365 Outlook **Send an email (V2)** and Microsoft Teams **Post a message in a chat or channel**. The diagram uses short labels for readability.

## Build guidance to discuss, not execute

1. Plan a scheduled cloud flow with **Recurrence**: every week, on Monday. Confirm the start date, local time and time zone; 09:00 Bangkok time is a fictional example, not a confirmed organisational setting.
2. Plan **Send an email (V2)**. Identify the permitted recipients, subject and body.
3. Plan **Post a message in a chat or channel**. Confirm the sender option, existing practice team and standard channel. Use the same reminder text as the email.

The scheduled event starts the sequence. Both Actions use fixed message text and configured destinations. The Teams Action does not need the email's output, and no Dynamic content is required for this example.

### Planned field values

These are design notes, not instructions to send messages today. Addresses use the fictional example.com domain.

**Outlook · To — type:**

```text
practice-team@example.com
```

**Outlook · Subject — type:**

```text
Weekly task-list reminder
```

**Outlook · Body — type:**

```text
Please update your task list by noon today.
```

**Teams · Post as:** discuss the permitted sender option with the instructor/IT team; do not assume it is enabled.

**Teams · Post in:** plan to use an existing channel.

**Teams · Team and Channel:** select approved practice destinations in a future build. Do not create or use live work destinations for this exercise.

**Teams · Message — type:**

```text
Please update your task list by noon today.
```

## Fictional walkthrough

1. Imagine Monday at the chosen local time: Recurrence starts the flow.
2. The email Action sends the planned reminder to the configured practice recipient.
3. The Teams Action posts the same reminder in the configured practice channel.

**Expected result:** one reminder email and one channel message. This does not prove that anyone updated their task list.

Before a future build, confirm the schedule/time zone, permitted test recipients, mailbox and Teams access, connector permissions and Power Automate entitlement. Do not buy access or change policy to bypass a restriction.

For a later authorised test, check Run history **and** the received email and channel message: correct destinations, matching text and expected schedule. If an Action fails or a message is missing, do not claim success; ask the instructor/TA to help inspect it.

## Check your design

Explain the Trigger, both Actions, where the message comes from, and one access requirement. Mark your notes **Design only — not built or tested**.

References: [scheduled cloud flows](https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks), [Outlook connector](https://learn.microsoft.com/en-us/connectors/office365/) and [Teams messages](https://learn.microsoft.com/en-us/power-automate/teams/send-a-message-in-teams). These document the steps, not your tenant's readiness.

[Return to Exercise 4](/exercises/04-ai-coaching)
