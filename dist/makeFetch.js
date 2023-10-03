"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makeFetch = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield response.json();
    //data.forEach((element) => console.log(element))
    const users = document.querySelector(".users");
    if (users !== null) {
        const div = document.createElement("div");
        div.setAttribute("class", "user");
        data.forEach(element => {
            div.innerHTML += `<div>${element.name} - ${element.company.name}<div>`;
        });
        users.appendChild(div);
    }
});
makeFetch();
