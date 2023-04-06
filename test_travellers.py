from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("http://localhost:3000/")
    page.get_by_role("button", name="Home").click()
    page.locator("form").click()
    page.locator("form").click()
    page.get_by_role("combobox").select_option("Africa")
    page.get_by_placeholder("Name").click()
    page.get_by_placeholder("Name").fill("afreedi")
    page.get_by_placeholder("Email").click()
    page.get_by_placeholder("Email").fill("afree@asd.in")
    page.get_by_placeholder("Travellers").click()
    page.get_by_placeholder("Travellers").fill("34")
    page.get_by_role("button", name="Submit").click()
    page.get_by_role("button", name="View").click()
    page.goto("http://localhost:3000/view")
    page.get_by_role("button", name="Home").click()
    page.get_by_role("button", name="View").click()
    page.get_by_role("button", name="Home").click()
