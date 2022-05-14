export function authSignUp() {
    return {
        url: `auth/signin`,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}