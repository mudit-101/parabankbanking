import data from "../utils/registration.json";

class Register {

    page: any;
    firstName: any;
    lastName: any;
    address: any;
    city: any;
    state: any;
    zipCode: any;
    phone: any;
    ssn: any;
    username: any;
    password: any;
    confirmPassword: any;
    registerBtn: any;

    constructor(page: any) {
        
        this.page = page;
        this.firstName = page.locator('[name="customer.firstName"]');
        this.lastName = page.locator('[name="customer.lastName"]');
        this.address = page.locator('[name="customer.address.street"]');
        this.city = page.locator('[name="customer.address.city"]');
        this.state = page.locator('[name="customer.address.state"]');
        this.zipCode = page.locator('[name="customer.address.zipCode"]');
        this.phone = page.locator('[name="customer.phoneNumber"]');
        this.ssn = page.locator('[name="customer.ssn"]');
        this.username = page.locator('[name="customer.username"]');
        this.password = page.locator('[name="customer.password"]');
        this.confirmPassword = page.locator('#repeatedPassword');
        this.registerBtn = page.locator('input[value="Register"]');
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
    }

    async registerUser() {
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.address.fill(data.address);
        await this.city.fill(data.city);
        await this.state.fill(data.state);
        await this.zipCode.fill(data.zipCode);
        await this.phone.fill(data.phone);
        await this.ssn.fill(data.ssn);
        await this.username.fill(data.username);
        await this.password.fill(data.password);
        await this.confirmPassword.fill(data.password);
        await this.registerBtn.click();
    }

    async screenshot() {
        await this.page.screenshot({
            path: "parabank_registration.png",
            fullPage: true
        });
    }
}

export default Register;