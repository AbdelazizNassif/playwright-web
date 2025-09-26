import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";
import { Checkout } from "../pages/checkout";

let context: any;
let page: any;
let productName: any;

test.describe.configure({ mode: "serial" });

test.beforeAll("login as precondition", async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  const loginPage: LoginPage = new LoginPage(page);
  loginPage.goto();
  loginPage.login("standard_user", "secret_sauce");
  const homePage: HomePage = new HomePage(page);
  expect(await homePage.products_header).toHaveText("Products");
});

test("add product to cart", async ({}) => {
  const homePage: HomePage = new HomePage(page);
  await homePage.clickAddToCart();
  productName = await homePage.productToAdd.textContent();
  await expect(await homePage.addToCart_button).toHaveText("REMOVE");
});

test("complete checkout", async ({}) => {
  const homePage: HomePage = new HomePage(page);
  await homePage.clickShoppingCart();
  const checkoutPage: Checkout = new Checkout(page);
  await expect(checkoutPage.productInCart).toBeEnabled();
  await expect(checkoutPage.productInCart).toHaveText("Sauce Labs Backpack");
  await checkoutPage.completeCheckout("John", "Doef", "123456");
  await expect(checkoutPage.thankYouMessage).toHaveText(
    "THANK YOU FOR YOUR ORDER"
  );
});
