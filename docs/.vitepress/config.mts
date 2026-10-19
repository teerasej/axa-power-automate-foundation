import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
export default withMermaid(defineConfig({
  "title": "Power Automate Foundation",
  "description": "Short, practical exercises for everyday work.",
  "lang": "en-GB",
  "base": process.env.SITE_BASE || "/",
  "cleanUrls": true,
  "themeConfig": {
    "nav": [
      {
        "text": "Start",
        "link": "/"
      },
      {
        "text": "Challenges",
        "link": "/challenges/"
      },
      {
        "text": "Downloads",
        "link": "/resources/downloads"
      }
    ],
    "sidebar": [
      {
        "text": "Get ready",
        "items": [
          {
            "text": "Overview",
            "link": "/"
          },
          {
            "text": "Preparation",
            "link": "/preparation"
          }
        ]
      },
      {
        "text": "Your learning day",
        "items": [
          {
            "text": "1 \u00b7 Find a bottleneck",
            "link": "/exercises/01-spot-bottleneck"
          },
          {
            "text": "2 \u00b7 Play the Flow-card challenges",
            "link": "/exercises/02-arrange-flow-cards"
          },
          {
            "text": "3 \u00b7 Build an email flow",
            "link": "/exercises/03-build-information-request"
          },
          {
            "text": "4 \u00b7 Design a simple flow with AI",
            "link": "/exercises/04-ai-coaching"
          }
        ]
      },
      {
        "text": "Practice resources",
        "items": [
          {
            "text": "Six-challenge board",
            "link": "/challenges/"
          },
          {
            "text": "Downloads",
            "link": "/resources/downloads"
          },
          {
            "text": "AI design fallback",
            "link": "/resources/fallback"
          }
        ]
      }
    ],
    "search": {
      "provider": "local"
    },
    "outline": [
      2,
      3
    ]
  }
}))
