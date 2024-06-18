const { Builder, By, Key, until } = require('selenium-webdriver');
async function automateLogin() {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://researchtube.ai/login');

    await driver.findElement(By.Name('Email')).sendKeys('zubaer@researchtube.ai');
    await driver.findElement(By.Name('Password')).sendKeys('1234', Key.Login);
    //Looking up id "Home" after log in.
    await driver.wait(until.elementLocated(By.id('Home')), 10000);

    console.log('Login successful!');
  } finally {
    await driver.quit();
  }
}

automateLogin();