# Habit Garden — mobile capstone draft

An Expo / React Native habit tracker for the IBM Mobile App Development Capstone Project. Course project draft with a public source repository. Assessment submission is separate.

## Nine user stories

1. As a new user, I want to register with a username, email and password so I can keep a personal garden. Acceptance: required-field, email, minimum-password and duplicate-account errors; save a salted password derivation rather than plaintext.
2. As a returning user, I want to log in with my email and password so I can return to my habits. Acceptance: incorrect credentials show feedback; successful login opens Home; logout clears the local session.
3. As a user, I want a home dashboard with today's progress and habit shortcuts so I know what to do next. Acceptance: counts update after completion; add a named habit; overview explains the workflow.
4. As a user, I want a detail screen with my habit's description and completion history so I can record progress. Acceptance: navigate from Home, mark or undo today's completion, and return without losing data.
5. As a user, I want my habits, profile and preferences to persist across sessions so I do not repeat setup. Acceptance: reload retains data; accounts have separate habits; failures preserve previous storage.
6. As a user, I want a quote from an external API so I can find inspiration. Acceptance: DummyJSON request shows returned quote/author; loading, timeout and error states are visible; retry is available.
7. As a user, I want a menu available on every authenticated screen so I can quickly reach Home, Profile, Inspiration, Settings, Notifications and Log out.
8. As a user, I want to edit my display name and theme so the app reflects my preferences. Acceptance: reject short names, persist changes and offer notification settings navigation.
9. As a user, I want an optional native test reminder so I can try habit notifications. Acceptance: request permission only after user action; handle denial; schedule a two-second local reminder; listen for receipt. Web clearly reports unsupported OS notifications. Local permission and reminder receipt were verified in Expo Go on an iOS 27 simulator.

## Design

[Nine editable Figma wireframes](https://www.figma.com/design/wJAkUVGmSTPrdTvjk1ba6a) in Yaroslav’s team. Material 3 inputs/buttons, Roboto Android reference typography. Sample values in wireframes are illustrative. `evidence/figma-evidence1.png` contains five core screens; `figma-evidence2.png` contains four connected-feature screens. Implementation uses native React Native controls and adapts their layout; wireframes are a design reference, not screenshots of the running app.

## Run

Install dependencies with `pnpm install`, then `pnpm start`. For a web bundle run `pnpm export:web` and serve `dist`. Expo Go / a development build on Android or iOS is required to verify local notifications. No remote push service or EAS account is needed for the local test reminder.

## Source map for the assessment

| Requirement | Source |
| --- | --- |
| Signup and login UI | AuthScreens.js |
| Credential validation / derivation | auth.js |
| Home, detail, menu and settings | App.js |
| Local persistence | storage.js, SavedProgressScreen.js |
| External API | ApiScreen.js |
| Notifications | NotificationsScreen.js |

## Limits

Authentication is an **offline demonstration**, not production identity verification. Account records and session are editable local application data. PBKDF2-SHA256 (100,000 iterations, random salt) avoids storing plaintext passwords, but does not provide a trusted authentication boundary. Use fictional emails and disposable test passwords. Production requires server authorization, secure sessions, recovery, rate limiting and a separate security review.

iOS 27 simulator UI, persistence after restart and a delivered local OS banner were verified. Android and physical-device testing, release signing and app-store publication are outstanding. Do not describe bundle exports as installed native builds. Do not submit the project until these limitations and the rubric have been reviewed.

Course source: https://www.coursera.org/learn/mobile-app-development-capstone-project/ungradedWidget/zR0kL/required-lab-develop-user-stories

API references: https://dummyjson.com/docs/quotes and https://docs.expo.dev/versions/v54.0.0/sdk/notifications/
