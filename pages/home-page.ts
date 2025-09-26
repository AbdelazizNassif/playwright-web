import { expect, type Locator, type Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export class HomePage {
  readonly page: Page;
  readonly products_header: Locator;
  readonly productToAdd: Locator;
  readonly addToCart_button: Locator;
  readonly shoppingCart_icon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products_header = page.locator("css=.product_label");
    this.productToAdd = page.getByRole("link", { name: "Sauce Labs Backpack" });
    this.addToCart_button = page.locator("css=.btn_inventory").first();
    this.shoppingCart_icon = page.locator("css=[data-icon='shopping-cart']");
  }

  async clickAddToCart() {
    await allure.step("Clcik add to cart button on first product", async () => {
      await this.addToCart_button.click();
    });
  }

  async getProductName() {
    await allure.step("get prodcut in cart title", async () => {
      return await this.productToAdd.textContent();
    });
  }

  async getAddToCartButtonText() {
    await allure.step("Clcik add to cart button on first product", async () => {
      return await this.addToCart_button.textContent();
    });
  }

  async clickShoppingCart() {
    await allure.step("Clcik add to cart button on first product", async () => {
      await this.shoppingCart_icon.click();
    });
  }
}
