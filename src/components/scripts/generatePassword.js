const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

export default async function generatePassword(pwdLen) {
    let password = "";
    for (let i = 0; i < pwdLen; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}