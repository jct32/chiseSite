export class PlayoffGame {
    parent: HTMLElement;
    base: HTMLElement;
    constructor() {
        this.parent = document.getElementById('app')!;
        this.parent.innerHTML = '';
        this.base = document.createElement('div');
        this.base.setAttribute("id", "container")
        this.parent.append(this.base);
        var paragraph = document.createElement('p');
        paragraph.innerText = "Hello world!";
        this.base.append(paragraph);
    }

}