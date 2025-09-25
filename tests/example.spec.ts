import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page.ts";
import { Checkout } from "../pages/checkout.ts";

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
  expect(await homePage.verifyProductsPage()).toEqual("Products");
});

test("add product to cart checkout", async ({}) => {
  const homePage: HomePage = new HomePage(page);
  await homePage.clickAddToCart();
  productName = await homePage.getProductName();
  await expect(await homePage.addToCart_button).toHaveText("REMOVE");
});

test("complete checkout", async ({}) => {
    const homePage: HomePage = new HomePage(page);
    await homePage.clickShoppingCart();
    const checkoutPage: Checkout = new Checkout(page);

  await expect(checkoutPage.productInCart).toHaveText(
    productName
  );
  await checkoutPage.completeCheckout();
  await expect(await checkoutPage.getOrderCompletionSuccessMessage()).toEqual(
    "THANK YOU FOR YOUR ORDER"
  );

});
