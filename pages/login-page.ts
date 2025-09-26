
import { expect, type Locator, type Page } from "@playwright/test";
import * as allure from "allure-js-commons";

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
    await allure.step("Navigate to login page", async () => {
      await this.page.goto("https://www.saucedemo.com/v1/");
    });
  }



  async login(username: string, password: string) {
    await allure.step("Login with user name and password", async () => {
      await this.username_input.fill(username);
            await this.password_input.fill(password);
      await this.login_button.click();

    });
  }
}
