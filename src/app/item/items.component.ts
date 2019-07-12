import { Component, OnInit } from "@angular/core";

const TESTE = [
    {
        img: 'https://cdn.wiboo.io/Imaged42a0579-c214-4927-b69d-08f50e9853b0',
        name: 'Caneca Animal',
        price: 'R$ 1000,00'
    },
    {
        img: 'https://cdn.wiboo.io/Image06419815-df7b-43bf-aa1f-018cd6bfd16c',
        name: 'Tábua De Frios Maravilhosa',
        price: 'R$ 1000,00'
    },
    {
        img: 'https://cdn.wiboo.io/Imagea37873f1-04fe-4057-aa69-0851e2df6d27',
        name: 'Caneca',
        price: 'R$ 1000,00'
    }
]

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    items = TESTE;

    constructor() { }

    ngOnInit(): void {

    }
}
