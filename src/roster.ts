/* class Player {
    position: String;
    number: String;
    name: String;
    overall: String;
    position_div: HTMLElement;
    number_div: HTMLElement;
    name_div: HTMLElement;
    overall_div: HTMLElement;
    constructor() {
        this.position = '';
        this.number = '';
        this.name = '';
        this.overall = '';
        this.position_div = this.create_input(0);
        this.number_div = this.create_input(1);
        this.name_div = this.create_input(2);
        this.overall_div = this.create_input(3);
    }

    create_input(value: Number) {
        let div = document.createElement('div');
        let widget = document.createElement('input');
        widget.setAttribute('type', 'text');
        switch(value) {
            case 0:
                widget.addEventListener('change', this.updatePosition.bind(this));
                break;
            case 1:
                widget.addEventListener('change', this.updateNumber.bind(this));
                break;
            case 2:
                widget.addEventListener('change', this.updateName.bind(this));
                break
            default:
                widget.addEventListener('change', this.updateOverall.bind(this));
                break;

        }
        div.appendChild(widget);
        return div;
    }

    updatePosition(event: any) {
        this.position = event.target.value;
    }

    updateNumber(event: any) {
        this.number = event.target.value;
    }

    updateName(event:any) {
        this.name = event.target.value;
    }

    updateOverall(event:any) {
        this.overall = event.target.value;
    }
} */

export class Roster {
    parent: HTMLElement;
    base: HTMLElement;
    constructor() {
        this.parent = document.getElementById('app')!;
        this.parent.innerHTML = '';
        this.base = document.createElement('div');
    }

/*     createGrid(string_text: string, rows: Number)
    {
        let headerLabel = document.createElement('div')
        headerLabel.innerText = string_text;

    } */
}