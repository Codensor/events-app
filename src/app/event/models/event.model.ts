export class Event {
    name: string;
    img: string;
    date: string;
    seats: number;

    constructor(event: Event) {
        this.name = event.name;
        this.img = event.img;
        this.date = event.date;
        this.seats = event.seats;
    }
}
