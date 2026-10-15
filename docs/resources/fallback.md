---
prev: false
next: false
---
# Instructor-authored fallback review

This explanation was written for the training package. It is not a saved live AI response or proof of a tenant run.

## What the sample shows

Both messages contain the first item because the sample Body is fixed text. Succeeded means the action executed; it does not prove the message matches the intended request. In a real flow, inspect Body before assuming this cause.

## Smallest correction

Replace only the fixed item after `Please provide:` with one space followed by the `RequestedItem` Dynamic content token from the manual trigger. Do not type the token name as plain text. Save without adding actions or changing connections.

## Predict, Try, Check

1. Predict that input B will produce this request line:

   ```text
   Please provide: Expected completion date
   ```

2. If account access is ready, run once with this input:

   ```text
   Expected completion date
   ```

3. Check Run history and the received email. The recipient, subject and surrounding text should remain unchanged. The requested item should match input B.

If no run was performed, record a test plan and an unverified result. If the actual flow already works, explain why no change is needed. Human verification remains essential.

[Return to Exercise 4](/exercises/04-ai-coaching)
