export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    revenue: number;

    constructor(json: any = null) {
        this.id = json?.id;
        this.first_name = json?.first_name;
        this.last_name = json?.last_name;
        this.email = json?.email;
        this.revenue = json?.revenue;
    }
}
