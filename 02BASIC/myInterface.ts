interface User {
    readonly dbId: number;
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const tien: Admin = {
    dbId: 22,
    email: "Tien@gmail.com",
    githubToken: "gh_1234",
    role: "admin",
    userId: 23,
    startTrial: () => {
        return "Trial started"
    },
    getCoupon: (name: "Tien", off: 80) => {
        return 10
    }
}