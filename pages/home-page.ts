import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly products_header: Locator;
  readonly productToAdd: Locator;
  readonly addToCart_button: Locator;
  readonly shoppingCart_icon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products_header = page.getByText("Products");
    this.productToAdd = page.getByRole("link", { name: "Sauce Labs Backpack" });
    this.addToCart_button = page.locator("css=.btn_inventory").first();
    this.shoppingCart_icon = page.locator("css=[data-icon='shopping-cart']");
  }

  async verifyProductsPage() {
    return await this.products_header.textContent()
  }

  async clickAddToCart () {
    await this.addToCart_button.click();
  }

  async getProductName () {
    return await this.productToAdd.textContent();
  }

  async getAddToCartButtonText () {
    return await this.addToCart_button.textContent();
  }

  async clickShoppingCart ()
{
    await this.shoppingCart_icon.click();
}

}