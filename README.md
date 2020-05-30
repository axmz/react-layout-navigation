# React-layout-navigation

RLN has 4 components:
- Wrapper - this is where RLN will be active.
- Level0 - this is the level navigable with Tab and Shift+Tab.
- Level1 - this level is navigable with C^hjkl.
- LevelNext - this is usefull when you need to go deeper than Level1. Provide the actual level in data-level attribute.

RLN has 8 shortcuts defined:

Level0
- Tab - next
- Shift+Tab - prev

Level1+
- C^j - next
- C^k - prev
- C^l - into
- C^h - up
- Enter - into / custom
- Esc - up

RLN can be adjusted to use only Tab, Shift+Tab, Enter and Esc