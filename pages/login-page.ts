import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username_input: Locator;
  readonly password_input: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username_input = page.getByRole("textbox", { name: "Username" });
    this.password_input = page.getByRole("textbox", { name: "Password" });
    this.login_button = page.getByRole("button", { name: "LOGIN" });
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/v1/");
  }

  async login(username: string, password: string) {
    await this.username_input.fill(username);
    await this.password_input.fill(password);
    await this.login_button.click();
  }
}
