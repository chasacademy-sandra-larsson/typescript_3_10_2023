
interface MyFetchedData {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: Address;
    phone: string;
    website: string;
    company: Company;

}

interface Address {
    street: string;
    suite: string;
    city: string; 
    zipcode: string;
    geo: {
        lat: string;
        long: string;
    }
}


interface Company {
    name: string;
    catchPhrase: string;
    bs: string
}




const makeFetch = async(): Promise<void> => {

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data: MyFetchedData[] = await response.json();

//data.forEach((element) => console.log(element))

const users = document.querySelector(".users");
if(users !== null) {

    const div: HTMLDivElement = document.createElement("div");
    div.setAttribute("class", "user");
    data.forEach(element => {
        div.innerHTML += `<div>${element.name} - ${element.company.name}<div>`;
    })

    users.appendChild(div);
}


}

makeFetch()