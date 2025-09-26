import { expect, type Locator, type Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export class Checkout {
  readonly page: Page;
  readonly productInCart: Locator;
  readonly checkout_button: Locator;
  readonly firstName_input: Locator;
  readonly lastName_input: Locator;
  readonly postalCode_input: Locator;
  readonly continue_button: Locator;
  readonly finish_button: Locator;
  readonly thankYouMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.thankYouMessage = page.getByText("THANK YOU FOR YOUR ORDER");
    this.firstName_input = page.getByRole("textbox", { name: "First Name" });
    this.lastName_input = page.getByRole("textbox", { name: "Last Name" });
    this.postalCode_input = page.getByRole("textbox", {
      name: "Zip/Postal Code",
    });
    this.continue_button = page.getByRole("button", { name: "CONTINUE" });
    this.finish_button = page.getByRole("link", { name: "FINISH" });
    this.productInCart = page.getByRole('link', { name: 'Sauce Labs Backpack' }) ;
    this.checkout_button = page.getByRole("link", { name: "CHECKOUT" });
  }

  async completeCheckout(name: string, lastName: string, postalCode: string) {
    await allure.step("complete checkout steps", async () => {
      await this.checkout_button.click();
      await this.firstName_input.fill("John");
      await this.lastName_input.fill("Doef");
      await this.postalCode_input.fill("123456");
      await this.continue_button.click();
      await this.finish_button.click();
    });
  }

}
