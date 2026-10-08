# Habit Garden — User Stories

## Nine user stories

1. As a new user, I want to register with a username, email and password so I can keep a personal garden. Acceptance: required-field, email, minimum-password and duplicate-account errors; save a salted password derivation rather than plaintext.
2. As a returning user, I want to log in with my email and password so I can return to my habits. Acceptance: incorrect credentials show feedback; successful login opens Home; logout clears the local session.
3. As a user, I want a home dashboard with today's progress and habit shortcuts so I know what to do next. Acceptance: counts update after completion; add a named habit; overview explains the workflow.
4. As a user, I want a detail screen with my habit's description and completion history so I can record progress. Acceptance: navigate from Home, mark or undo today's completion, and return without losing data.
5. As a user, I want my habits, profile and preferences to persist across sessions so I do not repeat setup. Acceptance: reload retains data; accounts have separate habits; failures preserve previous storage.
6. As a user, I want a quote from an external API so I can find inspiration. Acceptance: DummyJSON request shows returned quote/author; loading, timeout and error states are visible; retry is available.
7. As a user, I want a menu available on every authenticated screen so I can quickly reach Home, Profile, Inspiration, Settings, Notifications and Log out.
8. As a user, I want to edit my display name and theme so the app reflects my preferences. Acceptance: reject short names, persist changes and offer notification settings navigation.
9. As a user, I want an optional native test reminder so I can try habit notifications. Acceptance: request permission only after user action; handle denial; schedule a two-second local reminder; listen for receipt. Web clearly reports unsupported OS notifications. Native device verification is pending.

