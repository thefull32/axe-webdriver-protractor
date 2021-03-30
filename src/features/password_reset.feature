Feature: Morningstar Accessibility Test
    Scenario: Test for accessibility violations on Morningstar password reset
        Given Navigate to non-angular page https://identity.morningstar.com/ResetPassword.html?returnURL=https%3A%2F%2Fwww.morningstar.com/
        Then The page should be accessible