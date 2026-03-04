class User {
    private firstName: string;
    private middleName: string;
    private lastName: string;
    private birtDate: Date;
    private email: string;
    private maritalStatus: string;

    constructor(firstName: string, middleName: string, lastName: string, birtDate: Date, email: string, maritalStatus: string) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.birtDate = birtDate;
        this.email = email;
        this.maritalStatus = maritalStatus;
    }

    getAge(): number {
        const today = new Date();
        let age = today.getFullYear() - this.birtDate.getFullYear();
        const monthDifference = today.getMonth() - this.birtDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < this.birtDate.getDate())) {
            age--;
        }
        return age;
    }

    getEmailDomain(): string {
        const atIndex = this.email.indexOf("@");
        if (atIndex !== -1) {
            return this.email.substring(atIndex + 1);
        }
        return "";
    }

    getMaritalStatus(): string {
        return this.maritalStatus;
    }

    getFullName(): string {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

}

export default User;